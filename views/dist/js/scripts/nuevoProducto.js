$(function(){

    _init();

    function _init(){
        cargar_categorias();
        validarFormulario();
        guardar();
        preview_img();
    }

    function cargar_categorias(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'categoria/listar',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                //console.log(response);
                let inicio = '<option value=0>Seleccione una Categoría</option>';
                let aux = 0;

                if(response.length > 0){
                    response.forEach(element => {
                        aux += `<option value='${element.id}'>${element.categoria}</option>`;
                    });
                    inicio += aux;
                }

                $('#select-categoria').html(inicio);
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function guardar(){
        $('#form-nuevo-producto').submit(function(e){
            e.preventDefault();

            let id_categoria = $('#select-categoria option:selected').val();
            let codigo = $('#codigo-producto').val();
            let nombre = $('#nombre-producto').val();
            let descripcion = $('#descripcion-producto').val();
            let precio_venta = $('#precio-venta-producto').val();
            let fecha = $('#fecha-producto').val();
            let imagen = $('#imagen-producto')[0].files[0]; 
            let stock_minimo = $('#precio-venta-stock-minimo').val();
            let stock_maximo = $('#precio-venta-stock-maximo').val();

            let json = {
                categoria_id : id_categoria,
                codigo : codigo,
                nombre : nombre,
                descripcion : descripcion,
                precio_venta : precio_venta,
                fecha : fecha,
                img : imagen,
                stock_minimo : stock_minimo,
                stock_maximo : stock_maximo
            };

            let formdata = new FormData();

            if(validando(json)){
                if(parseInt(stock_maximo) < parseInt(stock_minimo)){
                    Swal.fire(
                        'Producto',
                        'El stock máximo debe ser mayor al stock mínimo',
                        'error'
                      );
                }else{
                    if(imagen == undefined){
                        json.img = 'producto-default.png';
                      //  formdata.append('producto',json);
                    }else{
                        //subir archivo
                        if(imagen.type == 'image/jpeg'  || imagen.type == 'image/jpg' || imagen.type == 'image/png'){
                            json.img = imagen.name;
                            guardar_nuevo(json,imagen);
                        }else{
                            Swal.fire(
                                'Producto',
                                'Tipo de archivo no admitido!',
                                'error'
                              )
                        }
                    }  
                }
            }else{
                console.log('formulario incorrecto :C')
            }

        });
    }

    function validando(json){
        if(json.categoria_id == '0'){
            Swal.fire(
                'Producto',
                'Seleccione una categoría',
                'error'
              );
              return false;
        }else
        if(json.codigo.length == 0){
            return false;
        }else
        if(json.nombre.length == 0){
            return false;
        }else
        if(json.precio_venta.length == 0){
            return false
        }else
        if(json.fecha.length == 0){
            return false;
        }
        else{
            return true;
        }
    }

    function validarFormulario(){
        $('#form-nuevo-producto').validate({
            rules:{
                codigo: {
                    required: true,
                    minlength: 4
                },
                nombre : {
                    required: true,
                    minlength: 5
                },
                imagen:{
                    required: true
                },
                precio_venta: {
                    required: true,
                },
                fecha: {
                    required: true,
                }
            },
            messages:{
                codigo: {
                    required: "Ingrese un codigo",
                    minlength : "El código debe tener 4 dígitos"
                },
                nombre: {
                    required: "Ingrese un nombre de un producto",
                    minlength : "Debe tener mínimo 5 carácteres"
                },
                imagen: {
                    required: "Ingrese una imagen de un producto",
                },
                precio_venta: {
                    required: "Ingrese un precio de venta",
                },
                fecha: {
                    required : "Ingrese una fecha"
                }
            },
            errorElement: "em"
        });
    }

    function guardar_nuevo(data,imagen){
        let json = {
            producto: data
        }
        let formdata = new FormData();
        formdata.append('fichero',imagen);

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'producto/save',
            data : "data=" + JSON.stringify(json),
            // especifica si será una petición POST o GET
            type : 'POST',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {

                if(response.status){
                    Swal.fire(
                        'Producto!',
                        response.mensaje,
                        'success'
                    );

                    $('#form-nuevo-producto')[0].reset();

                    $.ajax({
                        // la URL para la petición
                        url : urlServidor + 'producto/fichero',
                        data : formdata,
                        contentType: false,
                        processData: false, 
                        // especifica si será una petición POST o GET
                        type : 'POST',
                        // el tipo de información que se espera de respuesta
                        dataType : 'json',
                        success : function(response) {
                            //console.log(response);
                        },
                        error : function(jqXHR, status, error) {
                            console.log('Disculpe, existió un problema');
                        },
                        complete : function(jqXHR, status) {
                            // console.log('Petición realizada');
                        }
                    }); 

                    $('#img-preview').addClass('d-none');

                }else{
                    Swal.fire({
                        title: 'Error!',
                        text: response.mensaje,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                      })
                }
                //console.log(response);
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function preview_img(){
        $('#imagen-producto').change(function(){
            readImage(this);
            $('#img-preview').removeClass('d-none'); 
        });
    }

    function readImage(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
              $('#img-preview').attr('src', e.target.result); // Renderizamos la imagen
          }
          reader.readAsDataURL(input.files[0]);
        }
    }
});