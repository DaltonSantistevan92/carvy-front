var tabla;

$(function(){

    _init();

    function _init(){
        iniciar_tabla();
        actualizar_proveedor();
    }

    function iniciar_tabla(){
        tabla=$('#tabla-proveedor').dataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            dom: '<Bl<f>rtip>',//Definimos los elementos del control de tabla
            buttons: [		          
                    ],
            "ajax":
                    {
                        url:  urlServidor + 'proveedor/datatable',
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

    function actualizar_proveedor(){
        $('#btn-update').click(function(){
            let id = $('#proveedor-id').val();
            let ruc = $('#upd-ruc').val();
            let razon_social = $('#upd-razon-social').val();
            let correo = $('#upd-correo').val();
            let telefono = $('#upd-telefono').val();
            let direccion = $('#upd-direccion').val();
        
            if(ruc.length == 0){
                Swal.fire(
                    'Cliente',
                    'Complete el campo ruc',
                    'warning'
                  )
            }else
            if(razon_social.length == 0){
                Swal.fire(
                    'Cliente',
                    'Complete el campo razón social',
                    'warning'
                  )
            }else
            if(telefono.length == 0){
                Swal.fire(
                    'Cliente',
                    'Complete el campo telefono',
                    'warning'
                  )
            }else
            if(correo.length == 0){
                Swal.fire(
                    'Cliente',
                    'Complete el campo correo',
                    'warning'
                  )
            }
            else{
                let json = {
                    data: {
                        proveedor: { 
                            ruc: ruc,
                            razon_social: razon_social,
                            telefono: telefono,
                            correo: correo,
                            direccion: direccion
                        }
                    }
                }

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'proveedor/editar/' + id,
                    // especifica si será una petición POST o GET
                    type : 'PUT',
                    data: JSON.stringify(json),
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) {
                        if(response.status){
                            $('#actualizar-proveedor').modal('hide');
                            iniciar_tabla();
                            Swal.fire(
                                'Proveedor',
                                response.mensaje,
                                'success'
                              )
                        }else{
                            Swal.fire(
                                'Proveedor',
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
    $('#actualizar-proveedor').modal('show');
    cargar_proveedor(id);
}

function cargar_proveedor(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'proveedor/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            console.log(response);
            if(response.status){
                $('#proveedor-id').val(response.proveedor.id);
                $('#upd-ruc').val(response.proveedor.ruc);
                $('#upd-razon-social').val(response.proveedor.razon_social);
                $('#upd-correo').val(response.proveedor.correo);
                $('#upd-telefono').val(response.proveedor.telefono);
                $('#upd-direccion').val(response.proveedor.direccion);
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
        title: '¿Estás seguro de eliminar el proveedor?',
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
                url : urlServidor + 'proveedor/eliminar/' + id,
                // especifica si será una petición POST o GET
                type : 'DELETE',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        Swal.fire(
                            'Proveedor',
                            'Se ha borrado el proveedor correctamente',
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
    tabla=$('#tabla-proveedor').dataTable({
        "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        dom: '<Bl<f>rtip>',//Definimos los elementos del control de tabla
        buttons: [		          
                ],
        "ajax":
                {
                    url:  urlServidor + 'proveedor/datatable',
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