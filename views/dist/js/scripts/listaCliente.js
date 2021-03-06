var tabla;

$(function(){

    _init();

    function _init(){
        iniciar_tabla();
        actualizar_cliente();
    }
 
    function iniciar_tabla(){
        tabla=$('#tabla-cliente').dataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            dom: '<Bl<f>rtip>',//Definimos los elementos del control de tabla
            buttons: [		          
                    ],
            "ajax":
                    {
                        url:  urlServidor + 'cliente/datatable',
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

    function actualizar_cliente(){
        $('#btn-update').click(function(){
            let id = $('#cliente-id').val();
            let cedula = $('#upd-cedula').val();
            let nombres = $('#upd-nombres').val();
            let apellidos = $('#upd-apellidos').val();
            let telefono = $('#upd-telefono').val();
            let correo = $('#upd-correo').val();
            let direccion = $('#upd-direccion').val();
            let persona_id =$('#upd-persona-id').val();

            if(cedula.length == 0){
                Swal.fire(
                    'Cliente',
                    'Complete el campo cedula',
                    'warning'
                  )
            }else
            if(nombres.length == 0){
                Swal.fire(
                    'Cliente',
                    'Complete el campo nombres',
                    'warning'
                  )
            }else
            if(apellidos.length == 0){
                Swal.fire(
                    'Cliente',
                    'Complete el campo apellidos',
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
                        cliente: {
                            persona_id: persona_id, 
                            cedula: cedula,
                            nombres: nombres,
                            apellidos: apellidos,
                            telefono: telefono,
                            correo: correo,
                            direccion: direccion
                        }
                    }
                }

                console.log(json);

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'cliente/editar/' + id,
                    // especifica si será una petición POST o GET
                    type : 'PUT',
                    data: JSON.stringify(json),
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) {
                        if(response.status){
                            $('#actualizar_cliente').modal('hide');
                            iniciar_tabla();
                            Swal.fire(
                                'Cliente',
                                response.mensaje,
                                'success'
                              )
                        }else{
                            Swal.fire(
                                'Cliente',
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
    $('#actualizar_cliente').modal('show');
    cargar_cliente(id);
}

function cargar_cliente(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'cliente/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            console.log(response);
            if(response.status){
                $('#cliente-id').val(response.cliente.id);
                $('#upd-cedula').val(response.cliente.persona.cedula);
                $('#upd-nombres').val(response.cliente.persona.nombres);
                $('#upd-apellidos').val(response.cliente.persona.apellidos);
                $('#upd-telefono').val(response.cliente.persona.telefono);
                $('#upd-correo').val(response.cliente.persona.correo);
                $('#upd-direccion').val(response.cliente.persona.direccion);
                $('#upd-persona-id').val(response.cliente.persona.id);
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
        title: '¿Estás seguro de eliminar el cliente?',
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
                url : urlServidor + 'cliente/eliminar/'+id,
                // especifica si será una petición POST o GET
                type : 'DELETE',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        Swal.fire(
                            'Cliente!',
                            'Se ha borrado el cliente correctamente',
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
    tabla=$('#tabla-cliente').dataTable({
        "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        dom: '<Bl<f>rtip>',//Definimos los elementos del control de tabla
        buttons: [		          
                ],
        "ajax":
                {
                    url:  urlServidor + 'cliente/datatable',
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