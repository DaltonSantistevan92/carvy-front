$(function(){
   
    _init();

    function _init(){
        crear_categoria();
        refresh();
        paginar(1);
        actualizar_categoria();
    }

    function crear_categoria(){
        $('#nueva-categoria').click(function(){
            let categoria = $('#texto-categoria').val();

            if(categoria.length == 0){
                Swal.fire(
                    'Categoría',
                    'Ingrese el nombre de una categoria',
                    'error'
                  )
            }else
            if(categoria.length > 0 && categoria.length <4){
                Swal.fire(
                    'Categoría',
                    'Debe ingresar minimo 4 caracteres',
                    'info'
                  )
            }else{
                //console.log(categoria);
                //peticion ajax
                let json = {
                    "categoria":{
                        "nombre":categoria, 
                    }
                }
                guardar(json);
            }
        });
    }

    function guardar(json){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'categoria/save',
            data : "data=" + JSON.stringify(json),
            // especifica si será una petición POST o GET
            type : 'POST',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {

                if(response.status){
                    Swal.fire(
                        'Categoría!',
                        response.mensaje,
                        'success'
                    );

                    $('#texto-categoria').val('');
                    paginar(1);
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

    function refresh(){
        $('#refresh-categoria').click(function(){
            paginar(1);
        });
    }

    function paginar(pagina){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'categoria/page/'+pagina,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                if(response.categorias.length > 0){
                    //contruyendo la paginacion
                    let primer_boton = `<li class="page-item"><a class="page-link" onclick="get_paginacion(${response.primera_pagina})">&laquo;</a></li>`;
                    let ultimo_boton = ` <li class="page-item"><a class="page-link" onclick="get_paginacion(${response.ultima_pagina})">&raquo;</a></li>`;
                    let botones = '';
                    for(let i=0;i<response.total_paginas;i++){
                        botones+=`<li class="page-item"><a class="page-link" onclick="get_paginacion(${i+1})">${i+1}</a></li>`;
                    }
                    let paginacion = primer_boton+botones+ultimo_boton;
                    
                    //rellenando la tabla
                    let tr = '';
                    let i = 1;
                    response.categorias.forEach(element => {
                        tr += `<tr>
                        <td>${i}</td>
                        <td>${element.categoria} <span class="badge badge-success">${element.producto.length}</span></td>
                        <td> 
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-sm btn-outline-primary" onclick="ver_producto(${element.id})">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>
                        </td>
                        <td>${element.fecha}</td>
                        <td>
                                <div class="d-flex justify-content-center btn-group">
                                    <button class="btn btn-sm btn-warning" onclick="editar(${element.id})">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="btn btn-sm btn-danger" onclick="eliminar(${element.id})">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                        </td>
                        </tr>`;
                        i++;
                    });
                    $('#boton-paginacion-categoria').html(paginacion);
                    $('#body-categoria2').html(tr);

                }else{
                    alert('No hay datos');
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

    function actualizar_categoria(){
        $('#btn-update').click(function(){
            let id = $('#categoria-id').val();
            let categoria = $('#upd-categoria').val();
            console.log(categoria);
            if(categoria.length == 0){
                Swal.fire(
                    'Categoría',
                    'Complete el campo de categoría',
                    'warning'
                  )
            }else{
                let json = {
                    data: {
                        categoria: {
                            categoria: categoria
                        }
                    }
                }

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'categoria/editar/' + id,
                    // especifica si será una petición POST o GET
                    type : 'PUT',
                    data: JSON.stringify(json),
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) {
                        if(response.status){
                            $('#actualizar_categoria').modal('hide');
                            paginar(1);
                            Swal.fire(
                                'Categoría',
                                response.mensaje,
                                'success'
                              )
                        }else{
                            Swal.fire(
                                'Categoría',
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
    $('#actualizar_categoria').modal('show');
    cargar_categoria(id);
}

function cargar_categoria(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'categoria/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                $('#upd-categoria').val(response.data.categoria);
                $('#categoria-id').val(response.data.id);
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
        title: '¿Estás seguro de eliminar la categoría?',
        text: "Al eliminar la categoria, no se podrá recuperar",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, seguro!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'categoria/eliminar/'+id,
                // especifica si será una petición POST o GET
                type : 'DELETE',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
    
                    if(response.status){
                        Swal.fire(
                            'Categoría!',
                            response.mensaje,
                            'success'
                        );
                        paginar_aux(1);
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
      })
}

function producto(id){
    alert(id);
}

function get_paginacion(pagina){
    paginar_aux(pagina);
}

function paginar_aux(pagina){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'categoria/page/'+pagina,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.categorias.length > 0){
                //contruyendo la paginacion
                let primer_boton = `<li class="page-item"><a class="page-link" onclick="get_paginacion(${response.primera_pagina})">&laquo;</a></li>`;
                let ultimo_boton = ` <li class="page-item"><a class="page-link" onclick="get_paginacion(${response.ultima_pagina})">&raquo;</a></li>`;
                let botones = '';
                for(let i=0;i<response.total_paginas;i++){
                    botones+=`<li class="page-item"><a class="page-link" onclick="get_paginacion(${i+1})">${i+1}</a></li>`;
                }
                let paginacion = primer_boton+botones+ultimo_boton;
                
                //rellenando la tabla
                let tr = '';
                let i = 1;
                response.categorias.forEach(element => {
                    tr += `<tr>
                    <td>${i}</td>
                    <td>${element.categoria} <span class="badge badge-success">${element.producto.length}</span></td>
                    <td> 
                        <div class="d-flex justify-content-center">
                            <button class="btn btn-sm btn-outline-primary" onclick="ver_producto(${element.id})">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </td>
                    <td>${element.fecha}</td>
                    <td>
                            <div class="d-flex justify-content-center btn-group">
                                <button class="btn btn-sm btn-warning" onclick="editar(${element.id})">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="btn btn-sm btn-danger" onclick="eliminar(${element.id})">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                    </td>
                    </tr>`;
                    i++;
                });
                $('#boton-paginacion-categoria').html(paginacion);
                $('#body-categoria2').html(tr);

            }else{
                alert('No hay datos');
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

function ver_producto(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'categoria/buscar_categoria_producto/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            console.log(response);  
            let li = '';
            if(response){
                if(response.producto.length > 0){
                    response.producto.forEach(element => {
                        li +=  `<li class="mb-2">${element.nombre}</li>`;
                    });
                    $('#card-producto').removeClass('d-none');
                }else{
                    $('#card-producto').addClass('d-none');
                }
            }  
            $('#body-productos-categoria').html(li);       
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
}