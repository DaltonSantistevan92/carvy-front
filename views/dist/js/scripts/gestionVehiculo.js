$(function(){

    _init();

    function _init(){
        cargar_clientes();
        guardarVehiculo();
        validarFormulario();
        cargar_marcas();
        buscar_marcas();
        cargar_vehiculos_libres('S');
        buscar_cliente();
        estilos();
        agregar_cliente_vehiculo();
    }

    function estilos(){
        $('#btn-vehiculo').hide();
    }

    function cargar_clientes(){

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'cliente/listar',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                let item = '';
                let i = 0;
                //$('#box-clientes').html('');

                response.forEach(element => {
                    item += `<blockquote id="cliente-${i}" onclick="seleccionar(${element.cliente.id},${i},${response.length})" class="quote-secondary clientes" style="margin-left: -5px">
                    <p style="margin-bottom: -5px">${element.cliente.persona.nombres} ${element.cliente.persona.apellidos}</p>
                    <small>${element.cliente.persona.cedula}</small>
                  </blockquote>`;
                  i++;
                });
                $('#box-clientes').html(item);
                
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function validarFormulario(){
        $('#form-nuevo-vehiculo').validate({
            rules:{
                placa: {
                    required: true,
                    minlength: 7
                },
                modelo: {
                    required: true,
                    minlength: 4
                },
                color: {
                    required: true,
                    minlength: 4
                },
                kilometro: {
                    required: true,
                    minlength: 4
                }
            },
            messages:{
                placa: {
                    required: "Ingrese una placa",
                    minlength: "Debe tener 7 digítos"
                },
                modelo: {
                    required: "Ingresa un correo válido",
                    minlength: "Debe tener 4 caracteres"
                },
                color: {
                    required: "Ingresa un color",
                    minlength: "Debe tener 4 caracteres"
                },
                kilometro: {
                    required: "Ingresa el kilometro",
                    minlength: "Debe tener 4 caracteres"
                },
            },
            errorElement: "em"
        });
    }

    function validar(json){
        let vehiculo = json.vehiculo;

        if(vehiculo.placa.length == 0){
            Swal.fire({
                title: 'Error!',
                text: 'Ingrese una placa',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            return false;
        }else
        if(vehiculo.marca_id.length == 0){
            return false;
        }else
        if(vehiculo.modelo.length == 0){
            return false;
        }else
        if(vehiculo.color.length == 0){
            return false;
        }else
        if(vehiculo.kilometro.length == 0){
            return false;
        }
        else{
            return true;
        }
    }

    function guardarVehiculo(){
        $('#form-nuevo-vehiculo').submit(function(e){
            e.preventDefault();

            let placa = $('#placa-vehiculo').val();
            let marca_id = $('#marca-id').val();
            let modelo = $('#modelo-vehiculo').val();
            let color = $('#color-vehiculo').val();
            let kilometro = $('#kilometro-vehiculo').val();

            let json = {
                vehiculo: {
                    placa,
                    marca_id,
                    modelo,
                    color,
                    kilometro,
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

    function guardar(json){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'vehiculo/save',
            data : "data=" + JSON.stringify(json),
            // especifica si será una petición POST o GET
            type : 'POST',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {

                if(response.status){
                    Swal.fire(
                        'Vehículo!',
                        response.mensaje,
                        'success'
                    );

                    $('#form-nuevo-vehiculo')[0].reset();
                    cargar_vehiculos_libres('S');
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

    function cargar_marcas(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'marca/listar',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                console.log(response);
                if(response.status){
                    let tr = '';
                    let i = 1;
                    response.marca.forEach(element => {
                        tr += `<tr id="fila-marca-${element.id}">
                            <td>${i}</td>
                            <td style="display: none">${element.id}</td>
                            <td>${element.nombre}</td>
                            <td>
                                <div class="div">
                                    <button data-dismiss="modal" class="btn btn-danger btn-sm" onclick="seleccionar_marca(${element.id})">
                                        <i class="fas fa-check"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
                      i++;
                    });
                    $('#marca-body').html(tr);
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

    function buscar_marcas(){
        $('#buscar-marca').keyup(function(){
            let texto = $('#buscar-marca').val();
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'marca/search/' + texto,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    console.log(response);
                    if(response.status){
                        let tr = '';
                        let i = 1;
                        response.marca.forEach(element => {
                            tr += `<tr id="fila-marca-${element.id}">
                                <td>${i}</td>
                                <td style="display: none">${element.id}</td>
                                <td>${element.nombre}</td>
                                <td>
                                    <div class="div">
                                        <button data-dismiss="modal" class="btn btn-danger btn-sm" onclick="seleccionar_marca(${element.id})">
                                            <i class="fas fa-check"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>`;
                          i++;
                        });
                        $('#marca-body').html(tr);
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
    }

    function cargar_vehiculos_libres(estado){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'vehiculo/libre/'+estado,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                if(response.status){
                    let option = '<option value=0>Seleccione un vehículo</option>';
                    
                    response.vehiculos.forEach(element =>{
                        option += `<option value=${element.id}>${element.placa}</option>`;
                    });
                    //console.log(option);
                    $('#select-vehiculo').html(option);
   
                }else{
                    Swal.fire({
                        title: 'Error!',
                        text: 'No hay vehiculos libres..Ingrese uno',
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

    function buscar_cliente(){
        $('#buscar-cliente').keyup(function(){
            let texto =  $('#buscar-cliente').val();

            if(texto.length == 0){
                $('#buscar-cliente-nombre').html('------------------');
                $('#buscar-cliente-cedula').html('------------------');
                $('#buscar-cliente-telefono').html('-----');
                cargar_clientes();
                $('#body-listado-cliente').html('');
            }else{
                //ajax para buscar
                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'cliente/search/' + texto,
                    // especifica si será una petición POST o GET
                    type : 'GET',
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) {
                       console.log(response);
                       if(response.status){
                        let item = '';
                        let i = 0;
                        //$('#box-clientes').html('');
        
                        response.clientes.forEach(element => {
                            item += `<blockquote id="cliente-${i}" onclick="seleccionar(${element.id},${i},${response.clientes.length})" class="quote-secondary clientes" style="margin-left: -5px">
                            <p style="margin-bottom: -5px">${element.nombres} ${element.apellidos}</p>
                            <small>${element.cedula}</small>
                          </blockquote>`;
                          i++;
                        });
                        $('#box-clientes').html(item);                        
                       }else{
                           let msj = ` <div>
                           <p class="text-danger">${response.mensaje}</p>
                         </div>`;
                        $('#box-clientes').html(msj);
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

    function agregar_cliente_vehiculo(){

        $('#btn-vehiculo').click(function(){
            let cliente_id = $('#cliente_id').val();
            let vehiculo_id = $('#select-vehiculo option:selected').val();
    
            if(vehiculo_id == '0' || vehiculo_id == 0){                           
                    Swal.fire(
                        'Vehículo',
                        'Debe seleccionar un vehículo?',
                        'warning'
                    ) 
            }else{
                let json = {
                    datos: {
                        cliente_id,
                        vehiculo_id
                    }
                };
                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'vehiculo/saveClienteVehiculo',
                    data : "data=" + JSON.stringify(json),
                    // especifica si será una petición POST o GET
                    type : 'POST',
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) {
        
                        if(response.status){
                            Swal.fire(
                                'Vehículo!',
                                response.mensaje,
                                'success'
                            );
                            get_vehiculos2(cliente_id);
                            cargar_vehiculos_libres('S');
                        }else{
                            Swal.fire({
                                title: 'Error!',
                                text: response.mensaje,
                                icon: 'error',
                                confirmButtonText: 'Ok'
                              })
                        }
                        console.log(response);
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

    function get_vehiculos2(id_cliente){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'vehiculo/cliente/'+id_cliente,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                console.log(response);
                if(response.status){
                    let tr = '';
                    let i = 1;
                    response.vehiculos.forEach(element => {
                        tr += ` <tr>
                        <td>${i}</td>
                        <td>${element.vehiculo.placa}</td>
                        <td>${element.vehiculo.marca.nombre}</td>
                        <td><span class="tag tag-warning">${element.vehiculo.modelo}</span></td>
                        <td>
                                        <div>
                                            <button class="btn btn-danger" onclick="eliminar_vehiculo(${element.cliente_id},${element.vehiculo.id})">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                        </div>
                        </td>
                        </tr>`;
                    });
                    $('#body-listado-cliente').html(tr);
                }else{
                    let tr = `<tr>
                    <td></td>     
                    <td></td>
                    <td></td>
                    <td>${response.mensaje}</td>    
                    <td></td>           
                  </tr>`;
                  $('#body-listado-cliente').html(tr);
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

function seleccionar(id,select,cantidad){
    let item = '#cliente-'+select;
    $(item).addClass('select-cliente');

    for(let i=0;i<cantidad;i++){
        let aux = '#cliente-'+i;
        if(i!=select){
            $(aux).removeClass('select-cliente');
            
        }
    }

    get_cliente(id);
    get_vehiculos(id);
}

function get_cliente(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'cliente/buscar/'+id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {

            if(response.status){
                let nombres = response.cliente.persona.nombres + ' ' + response.cliente.persona.apellidos;
                $('#buscar-cliente-nombre').html(nombres);
                $('#buscar-cliente-cedula').html(response.cliente.persona.cedula);
                $('#buscar-cliente-telefono').html(response.cliente.persona.telefono);
                $('#cliente_id').val(id);
                $('#btn-vehiculo').show();
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

function get_vehiculos(id_cliente){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'vehiculo/cliente/'+id_cliente,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            console.log(response);
            if(response.status){
                let tr = '';
                let i = 1;
                response.vehiculos.forEach(element => {
                    tr += ` <tr>
                    <td>${i}</td>
                    <td>${element.vehiculo.placa}</td>
                    <td>${element.vehiculo.marca.nombre}</td>
                    <td><span class="tag tag-warning">${element.vehiculo.modelo}</span></td>
                    <td>
                                    <div>
                                        <button class="btn btn-danger" onclick="eliminar_vehiculo(${element.cliente_id},${element.vehiculo.id})">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div>
                    </td>
                    </tr>`;
                });
                $('#body-listado-cliente').html(tr);
            }else{
                let tr = `<tr>
                <td></td>     
                <td></td>
                <td></td>
                <td>${response.mensaje}</td> 
                <td></td>                 
              </tr>`;
              $('#body-listado-cliente').html(tr);
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

function eliminar_vehiculo(id_cliente,id_vehiculo){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'vehiculo/eliminarClienteVehiculo/'+id_vehiculo+'/'+id_cliente,
        // especifica si será una petición POST o GET
        type : 'DELETE',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            get_vehiculos(id_cliente);
            cargar_vehiculos_libres2('S');
            Swal.fire(
                'Vehículo',
                response.mensaje,
                'info'
              )
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
}

function cargar_vehiculos_libres2(estado){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'vehiculo/libre/'+estado,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                let option = '<option value=0>Seleccione un vehículo</option>';
                
                response.vehiculos.forEach(element =>{
                    option += `<option value=${element.id}>${element.placa}</option>`;
                });
                //console.log(option);
                $('#select-vehiculo').html(option);

            }else{
                Swal.fire({
                    title: 'Error!',
                    text: 'No hay vehiculos libres..Ingrese uno',
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

function seleccionar_marca(id){
    let fila = '#fila-marca-'+id;
    let f = $(fila)[0].children;

    let nombre = f[2].innerText;
    
    $('#marca-id').val(id);
    $('#marca-vehiculo').val(nombre);
}

