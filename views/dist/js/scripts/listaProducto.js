var tabla;

$(function(){

    _init();

    function _init(){
        iniciar_tabla();
        preview_img();
    }

    function iniciar_tabla(){
        tabla=$('#tabla-producto').dataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            dom: '<Bl<f>rtip>',//Definimos los elementos del control de tabla
            buttons: [		          
                    ],
            "ajax":
                    {
                        url:  urlServidor + 'producto/datatable',
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

    function preview_img(){
        $('#imagen-nueva').change(function(){
            readImage(this);

            $('#btn-actualizar').click(function(){
                let id = $('#id-prod').val();
                let imagen = $('#imagen-nueva')[0].files[0];

                let json = {
                    data: {
                        imagen: {
                            img: imagen
                        }
                    }
                }

                console.log(json);

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'producto/editarimg/' + id,
                    // especifica si será una petición POST o GET
                    type : 'PUT',
                    data: JSON.stringify(json),
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) {
                        console.log(response);
                       if(response.status){
                        $('#img-prod').attr('src', urlServidor + 'resources/productos/' + response.producto.img);
                        Swal.fire({
                            title: 'Producto',
                            text: response.mensaje,
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        });
                       }            
                    },
                    error : function(jqXHR, status, error) {
                        console.log('Disculpe, existió un problema');
                    },
                    complete : function(jqXHR, status) {
                        // console.log('Petición realizada');
                    }
                });        

               /*  Imagen */
                let img_ = $('#imagen-nueva')[0].files[0];
                let formdata = new FormData();
                formdata.append('fichero',img_);
                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'producto/fichero',
                    // especifica si será una petición POST o GET
                    type : 'POST',
                    data : formdata,
                    contentType: false,
                    processData: false,
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(responseImg) {
                        console.log(responseImg);
                        if(responseImg.status){
                            Swal.fire({
                                title: 'Producto',
                                text: 'Se ha guardado el producto',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                              });
                        }
                    },
                    error : function(jqXHR, status, error) {
                        console.log('Disculpe, existió un problema');
                    },
                    complete : function(jqXHR, status) {
                        // console.log('Petición realizada');
                    }
                });
            });
        });
    }
    
    function readImage(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
              $('#img-prod').attr('src', e.target.result); // Renderizamos la imagen
          }
          reader.readAsDataURL(input.files[0]);
        }
      }
});

function editar_producto(id){
    $('#actualizar-producto').modal('show');
    cargar_productos(id);
}

function cargar_productos(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'producto/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            console.log(response);
            if(response.status){
                $('#producto-id').val(response.producto.id);
                $('#upd-codigo').val(response.producto.codigo);
                $('#upd-nombre').val(response.producto.nombre);
                $('#upd-stock').val(response.producto.stock);
                $('#upd-pventa').val(response.producto.precio_venta);
                $('#upd-descripcion').val(response.producto.descripcion);
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

function eliminar(id,control){
    let estado = control == 1 ? 'A' : 'I';
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'producto/eliminar/'+id+'/'+estado,
        // especifica si será una petición POST o GET
        type : 'DELETE',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            console.log(response);
            if(response.status){
                Swal.fire(
                    'Producto',
                    response.mensaje,
                    'success'
                  )
            }
            iniciar_tabla2();
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
}

function iniciar_tabla2(){
    tabla=$('#tabla-producto').dataTable({
        "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        dom: '<Bl<f>rtip>',//Definimos los elementos del control de tabla
        buttons: [		          
                ],
        "ajax":
                {
                    url:  urlServidor + 'producto/datatable',
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

function ver_img(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'producto/verImg/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            console.log(response);
            $('#modal-img').modal('show');
            if(response.status){
                $('#img-prod').attr('src', urlServidor + 'resources/productos/' + response.producto.img);
                $('#id-prod').val(response.producto.id);
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
