$(function(){

    _init();

    function _init(){
        validarFormulario();
        guardarProveedor();
    }

    function validarFormulario(){
        $('#form-nuevo-proveedor').validate({
            rules:{
                ruc: {
                    required: true,
                    maxlength: 13,
                    minlength: 13
                },
                razon_social : {
                    required: true,
                    minlength: 6
                },
                correo: {
                    required: true,
                    email: true
                },
                telefono: {
                    required: true
                }
            },
            messages:{
                ruc: {
                    required: "Ingrese un RUC",
                    maxlength : "El RUC debe tener 13 dígitos",
                    minlength: "Debe tener 13 digítos"
                },
                razon_social: {
                    required: "Ingrese nombre del proveedor",
                    minlength : "Debe tener mínimo 4 carácteres"
                },
                correo: "Ingresa un correo válido",
                telefono: "Debe tener mínimo 10 dígitos"
            },
            errorElement: "em"
        });
    }

    function guardarProveedor(){
        $('#form-nuevo-proveedor').submit(function(e){
            e.preventDefault();

            let ruc = $('#ruc-proveedor').val();
            let razon_social = $('#razon-social-proveedor').val();
            let direccion = $('#descripcion-proveedor').val();
            let correo = $('#correo-proveedor').val();
            let telefono = $('#telefono-proveedor').val();

            let json = {
                proveedor: {
                    ruc,
                    razon_social,
                    direccion,
                    correo,
                    telefono
                }
            };

            if(!validar(json)){
                //procede a guardar
                console.log("debe llenar los campos");
            }else{
                console.log(json);
                guardar(json);
            }
        });
    }

    function validar(json){
        let proveedor = json.proveedor;
        var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

        if(proveedor.ruc.length == 0){
            return false;
        }else
        if(proveedor.razon_social.length == 0){
            return false;
        }else
        if(proveedor.correo.length == 0){
            return false;
        }else
        if(proveedor.telefono.length == 0){
            return false;
        }else
        if(proveedor.ruc.length < 13 || proveedor.razon_social.length < 6 ){
            return false;
        }else
        if(caract.test(proveedor.correo) == false){
            return false;
        }
        else{
            return true;
        }
    }

    function guardar(json){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'proveedor/save',
            data : "data=" + JSON.stringify(json),
            // especifica si será una petición POST o GET
            type : 'POST',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {

                if(response.status){
                    Swal.fire(
                        'Proveedor!',
                        response.mensaje,
                        'success'
                    );

                    $('#form-nuevo-proveedor')[0].reset();
                }else{
                    Swal.fire({
                        title: 'Error!',
                        text: response.mensaje,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                      })
                }
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }
});