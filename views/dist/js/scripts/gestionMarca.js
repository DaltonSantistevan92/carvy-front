var tabla;

$(function(){
    
    _init();

    function _init(){
        iniciar_tabla();
        crear_marca();
        actualizar_marca();
    }

    function iniciar_tabla(){
        tabla=$('#tabla-marcas').dataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            dom: '<Bl<f>rtip>',//Definimos los elementos del control de tabla
            buttons: [		          
                    ],
            "ajax":
                    {
                        url:  urlServidor + 'marca/datatable',
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

    function crear_marca(){
        $('#nueva-marca').click(function(){
            let marca = $('#texto-marca').val();

            if(marca.length == 0){
                Swal.fire(
                    'Marca',
                    'Ingrese el nombre de una marca',
                    'warning'
                  )
            }else{
                //peticion ajax
                let json = {
                        marca: {
                            nombre: marca, 
                        }
                }
                guardar(json);
            }
        });
    }

    function guardar(json){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'marca/save',
            data : "data=" + JSON.stringify(json),
            // especifica si será una petición POST o GET
            type : 'POST',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {

                if(response.status){
                    Swal.fire(
                        'Marca',
                        response.mensaje,
                        'success'
                    );

                    $('#texto-marca').val('');
                    iniciar_tabla();
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

    function actualizar_marca(){
        $('#btn-update').click(function(){
            let id = $('#marca-id').val();
            let marca = $('#upd-marca').val();
            if(marca.length == 0){
                Swal.fire(
                    'Marca',
                    'Complete el campo marca',
                    'warning'
                  )
            }else{
                let json = {
                    data: {
                        marca: {
                            nombre: marca
                        }
                    }
                }

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'marca/editar/' + id,
                    // especifica si será una petición POST o GET
                    type : 'PUT',
                    data: JSON.stringify(json),
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) {
                        if(response.status){
                            $('#actualizar_marca').modal('hide');
                            iniciar_tabla();
                            Swal.fire(
                                'Marca',
                                response.mensaje,
                                'success'
                              )
                        }else{
                            Swal.fire(
                                'Marca',
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

function iniciar_tabla2(){
    tabla=$('#tabla-marcas').dataTable({
        "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        dom: '<Bl<f>rtip>',//Definimos los elementos del control de tabla
        buttons: [		          
                ],
        "ajax":
                {
                    url:  urlServidor + 'marca/datatable',
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

function editar(id){
    $('#actualizar_marca').modal('show');
    cargar_marcas(id);
}

function cargar_marcas(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'marca/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            console.log(response);
            if(response.status){
                $('#upd-marca').val(response.marca.nombre);
                $('#marca-id').val(response.marca.id);
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
        title: '¿Estás seguro de eliminar la marca?',
        text: "No se podrá recuperar el registro",
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
                url : urlServidor + 'marca/eliminar/'+id,
                // especifica si será una petición POST o GET
                type : 'DELETE',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {   
                    if(response.status){
                        Swal.fire(
                            'Marca',
                            response.mensaje,
                            'success'
                        );
                        iniciar_tabla2();
                    }else{
                        Swal.fire({
                            title: 'Marca',
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
      })
}