var tabla;

$(function(){

    _init();

    function _init(){
        iniciar_tabla();
        actualizar_vehiculo();
    }

    function iniciar_tabla(){
        tabla=$('#tabla-vehiculo').dataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            dom: '<Bl<f>rtip>',//Definimos los elementos del control de tabla
            buttons: [		          
                    ],
            "ajax":
                    {
                        url:  urlServidor + 'cliente/listar_vehiculo',
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
    }

    function actualizar_vehiculo(){
        $('#btn-update').click(function(){
            let id = $('#vehiculo-id').val();
            let placa = $('#placa-vehiculo').val();
            let modelo = $('#modelo-vehiculo').val();
            let color = $('#color-vehiculo').val();
            let kilometro = $('#kilometro-vehiculo').val();
        
            if(placa.length == 0){
                Swal.fire(
                    'Cliente',
                    'Complete el campo placa',
                    'warning'
                  )
            }else
            if(modelo.length == 0){
                Swal.fire(
                    'Cliente',
                    'Complete el campo modelo',
                    'warning'
                  )
            }else
            if(color.length == 0){
                Swal.fire(
                    'Cliente',
                    'Complete el campo color',
                    'warning'
                  )
            }else
            if(kilometro.length == 0){
                Swal.fire(
                    'Cliente',
                    'Complete el campo correo',
                    'warning'
                  )
            }
            else{
                let json = {
                    data: {
                        vehiculo: { 
                            placa: placa,
                            modelo: modelo,
                            color: color,
                            kilometro: kilometro
                        }
                    }
                }

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'vehiculo/editar/' + id,
                    // especifica si será una petición POST o GET
                    type : 'PUT',
                    data: JSON.stringify(json),
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) {
                        if(response.status){
                            $('#actualizar-vehiculo').modal('hide');
                            iniciar_tabla();
                            Swal.fire(
                                'Vehículo',
                                response.mensaje,
                                'success'
                              )
                        }else{
                            Swal.fire(
                                'Vehículo',
                                response.mensaje,
                                'error'
                              )
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
    }
});

function editar(id){
    $('#actualizar-vehiculo').modal('show');
    cargar_vehiculo(id);
}

function cargar_vehiculo(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'vehiculo/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                $('#vehiculo-id').val(response.vehiculo.id);
                $('#placa-vehiculo').val(response.vehiculo.placa);
                $('#marca-vehiculo').val(response.vehiculo.marca.nombre);
                $('#modelo-vehiculo').val(response.vehiculo.modelo);
                $('#color-vehiculo').val(response.vehiculo.color);
                $('#kilometro-vehiculo').val(response.vehiculo.kilometro);
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

function eliminar(id){
    Swal.fire({
        title: '¿Estás seguro de eliminar el vehículo?',
        text: "No se podra recuperar el registro",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'vehiculo/eliminar/' + id,
                // especifica si será una petición POST o GET
                type : 'DELETE',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        Swal.fire(
                            'Vehículo',
                            'Se ha borrado el vehículo correctamente',
                            'success'
                          )
                          iniciar_tabla2();
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
    }) 
}

function iniciar_tabla2(){
    tabla=$('#tabla-vehiculo').dataTable({
        "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        dom: '<Bl<f>rtip>',//Definimos los elementos del control de tabla
        buttons: [		          
                ],
        "ajax":
                {
                    url:  urlServidor + 'cliente/listar_vehiculo',
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
}