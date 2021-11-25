$(function(){
    _init();

    function _init(){
        cargar_categorias();
        cargar_producto();
        cargar_anio();
        cargar_meses();
        cargar_kardex();
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

    function cargar_producto(){
        $('#select-categoria').change(function(){
            let id = $('#select-categoria option:selected').val();
                console.log(id);
                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'categoria/buscar_categoria_producto/' + id,
                    // especifica si será una petición POST o GET
                    type : 'GET',
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) {
                        let inicio = '<option value=0>Seleccione un Producto</option>';
                        let aux = 0;

                        if(response.producto.length > 0){
                            response.producto.forEach(element => {
                                aux += `<option value='${element.id}'>${element.nombre}</option>`;
                            });
                            inicio += aux;
                        }

                        $('#select-productos').html(inicio);       
                    },
                    error : function(jqXHR, status, error) {
                        console.log('Disculpe, existió un problema');
                    },
                    complete : function(jqXHR, status) {
                        // console.log('Petición realizada');
                    }
                });
        });
    }

    function cargar_meses(){
        let option = '<option value=0>Seleccione un Mes</option>';
        month.forEach(element => {
            option += `<option value=${element.value}>${element.month}</option>`;
        });
        $('#select-mes').html(option);
    }

    function cargar_anio(){
        let option = '<option value=0>Seleccione un Año</option>';
        year.forEach(element => {
            option += `<option value=${element.value}>${element.year}</option>`;
            console.log(element);
        });
        $('#select-anio').html(option);
    }

    function iniciar_tabla(id_producto,desde,hasta){
        let mes = parseInt(month)+ 1;
        tabla=$('#tabla-inventario').dataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            dom: '<Bl<f>rtip>',//Definimos los elementos del control de tabla
            buttons: [		          
                    ],
            "ajax":
                    {
                        url:  urlServidor + 'inventario/kardex/' + id_producto + '/' + desde + '/' + hasta,
                        type : "get",
                        dataType : "json",						
                        error: function(e){
                            console.log(e.responseText);	
                        }
                    },
            "bDestroy": true,
            "iDisplayLength": 10,//Paginación

            "language": {
 
			    "sProcessing":     "Procesando...",
			 
			    "sLengthMenu":     "Mostrar _MENU_ registros",
			 
			    "sZeroRecords":    "No se encontraron resultados",
			 
			    "sEmptyTable":     "Ningún dato disponible en esta tabla",
			 
			    "sInfo":           "Mostrando un total de _TOTAL_ registros",
			 
			    "sInfoEmpty":      "Mostrando un total de 0 registros",
			 
			    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
			 
			    "sInfoPostFix":    "",
			 
			    "sSearch":         "Buscar:",
			 
			    "sUrl":            "",
			 
			    "sInfoThousands":  ",",
			 
			    "sLoadingRecords": "Cargando...",
			 
			    "oPaginate": {
			 
			        "sFirst":    "Primero",
			 
			        "sLast":     "Último",
			 
			        "sNext":     "Siguiente",
			 
			        "sPrevious": "Anterior"
			 
			    },
			 
			    "oAria": {
			 
			        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
			 
			        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
			 
			    }

			   }//cerrando language
        });
        $('#tabla-inventario').removeClass('d-none');
    }

    function cargar_kardex(){
        $('#btn-consultar').click(function(){
            let categoria_id =$('#select-categoria').val();
            let producto_id = $('#select-productos').val();
            let desde = $('#date-kardex-inicio').val();
            let hasta = $('#date-kardex-fin').val();

            if(categoria_id == '0'){
                Swal.fire(
                    'Kardex',
                    'Seleccione una Categoría',
                    'warning'
                  )
            }else
            if(producto_id == '0'){
                Swal.fire(
                    'Kardex',
                    'Seleccione un Producto',
                    'warning'
                  )
            }else
            if(desde.length == 0){
                Swal.fire(
                    'Kardex',
                    'Seleccione una Fecha Desde',
                    'warning'
                  )
            }else
            if(hasta.length == 0){
                Swal.fire(
                    'Kardex',
                    'Seleccione una Fecha Hasta',
                    'warning'
                  )
            }else{
                if(moment(desde).isAfter(hasta)){
                    Swal.fire(
                      'Kardex',
                      'La fecha hasta no puede menor a la fecha de inicio',
                      'error'
                    )
                }else{
                    cargar_cards(producto_id,desde, hasta);
                    iniciar_tabla(producto_id, desde, hasta);
                }
            }
        });
    }

    function cargar_cards(id_producto, desde, hasta){       
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'inventario/kar/' + id_producto + '/' + desde + '/' + hasta,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                console.log(response);
                if(response.status){
                    $('#entrada-cantidad').text(response.entrada[0]);
                    $('#entrada-precio').text(response.entrada[1]);
                    $('#entrada-total').text(response.entrada[2]);

                    $('#salida-cantidad').text(response.salidas[0]);
                    $('#salida-precio').text(response.salidas[1]);
                    $('#salida-total').text(response.salidas[2]);

                    $('#disponibles-cantidad').text(response.disponibles[0]);
                    $('#disponibles-precio').text(response.disponibles[1]);
                    $('#disponibles-total').text(response.disponibles[2]);
                }else{
                    $('#entrada-cantidad').text('0');
                    $('#entrada-precio').text('0');
                    $('#entrada-total').text('0');

                    $('#salida-cantidad').text('0');
                    $('#salida-precio').text('0');
                    $('#salida-total').text('0');

                    $('#disponibles-cantidad').text('0');
                    $('#disponibles-precio').text('0');
                    $('#disponibles-total').text('0');
                }
            },
            error : function(jqXHR, status, error) {
                $('#entrada-cantidad').text('0');
                $('#entrada-precio').text('0');
                $('#entrada-total').text('0');

                $('#salida-cantidad').text('0');
                $('#salida-precio').text('0');
                $('#salida-total').text('0');

                $('#disponibles-cantidad').text('0');
                $('#disponibles-precio').text('0');
                $('#disponibles-total').text('0');
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }
});