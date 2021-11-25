$(function(){
    _init();

    function _init(){
        cargar_clientes();
        buscar_cliente();
        cargar_vehiculo();
        cargar_mecanico();
        cargar_averias();
        agregar_averia();
        buscar_mecanico();
        guardar_orden();
        reset();
        borrar_datos();
        cargar_fecha_hora();
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
                if(response.length > 0){
                    let tr = '';
                    let i = 1;
                    response.forEach(element => {
                        tr += `<tr id="fila-cliente-${element.cliente.id}">
                            <td>${i}</td>
                            <td style="display: none">${element.cliente.id}</td>
                            <td>${element.cliente.persona.cedula}</td>
                            <td>${element.cliente.persona.nombres}</td>
                            <td>${element.cliente.persona.apellidos}</td>
                            <th style="display: none">${element.cliente.persona.telefono}</th>
                            <th style="display: none">${element.cliente.persona.correo}</th>
                            <td>
                                <div class="div">
                                    <button data-dismiss="modal" class="btn btn-danger btn-sm" onclick="seleccionar_cliente(${element.cliente.id})">
                                        <i class="fas fa-check"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
                      i++;
                    });
                    $('#cliente-body').html(tr);
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
        $('#buscar-cli').keyup(function(){
            let texto = $('#buscar-cli').val();
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
                        let tr = '';
                        let i = 1;
                        response.clientes.forEach(element => {
                            tr += `<tr id="fila-cliente-${element.id}">
                                <td>${i}</td>
                                <td style="display: none">${element.id}</td>
                                <td>${element.cedula}</td>
                                <td>${element.nombres}</td>
                                <td>${element.apellidos}</td>
                                <th style="display: none">${element.telefono}</th>
                                <th style="display: none">${element.correo}</th>
                                <td>
                                    <div class="div">
                                        <button class="btn btn-danger btn-sm" onclick="seleccionar_cliente(${element.id})">
                                            <i class="fas fa-check"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>`;
                          i++;
                        });
                        $('#cliente-body').html(tr);
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

    function cargar_vehiculo(){
        $('#select-placa').change(function(){
            let id =  $('#select-placa option:selected').val();
            let placa = $('#select-placa option:selected').text();
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'vehiculo/buscar/'+id,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        let marca = response.vehiculo.marca.nombre;
                        let modelo = response.vehiculo.modelo;
                        let color = response.vehiculo.color;
                        let id = response.vehiculo.id;

                        $('#vehiculo-id').val(id);
                        $('#vehiculo-marca').val(marca);
                        $('#vehiculo-modelo').val(modelo);
                        $('#vehiculo-color').val(color);

                        $('#pre-orden-vehiculo').text(placa);
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

    function cargar_mecanico(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'mecanico/listar',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                if(response.status){
                    let tr = '';
                    let i = 1;
                    
                    response.mecanico.forEach(element => {
                        let d = (element.status == 'D') ? 'Sí' : 'No';
                        let btn = (element.status == 'D') ? '' : 'disabled';
                        let bg = (element.status == 'D') ? '' : 'style="background-color: #ccc"';

                        tr += `<tr ${bg} id="fila-mecanico-${element.id}">
                            <td>${i}</td>
                            <td style="display: none">${element.id}</td>
                            <td>${element.persona.cedula}</td>mecanico
                            <td>${element.persona.nombres}</td>
                            <td>${element.persona.apellidos}</td>
                            <td style="display: none">${element.persona.telefono}</td>
                            <td style="display: none">${element.persona.correo}</td>
                            <td>${d}</td>
                            <td style="display: none">${element.persona.usuario[0].img}</td>
                            <td>
                                <div class="div">
                                    <button ${btn} data-dismiss="modal" class="btn btn-danger btn-sm" onclick="seleccionar_mecanico(${element.id})">
                                        <i class="fas fa-check"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
                      i++;
                    });
                    $('#mecanico-body').html(tr);

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

    function cargar_averias(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'averias/listar',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                let option = '<option value="0">Seleccione una opción</option>';
               if(response.status){
                    response.averias.forEach(element =>{
                        option += `<option value=${element.id}>${element.descripcion}</option>`;
                    });
                $('#select-averias').html(option);
                }else{
                    Swal.fire({
                        title: 'Error!',
                        text: 'No hay datos disponibles',
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

    function agregar_averia(){
        $('#btn-agregar-averia').click( () => {
            let id = $('#select-averias option:selected').val();
            if(id == '0'){
                Swal.fire({
                    title: 'Orden de Trabajo!',
                    text: 'Seleccione una avería',
                    icon: 'info',
                    confirmButtonText: 'Ok'
                })
            }else{
                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'averias/listar/' + id,
                    // especifica si será una petición POST o GET
                    type : 'GET',
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) {
                        if(response.status){
                            let tr = `<tr id="fila-averia-${response.averia.id}">
                            <td><i class="fas fa-star-of-life"></i></td>
                            <td>${response.averia.descripcion}</td>
                            <td class="tr-averias-precios">${response.averia.precio}</td>
                            <td>
                                <div>
                                    <button class="btn btn-outline-danger"
                                        onclick="borrar_item(${response.averia.id})">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </td>
                            <td class="tr-averia none">${response.averia.id}</td>
                        </tr>`;

                        let li = `<li id="li-averia-${response.averia.id}" class="text-primary">${response.averia.descripcion}</li>`
                        $('#items-averias').append(tr);
                        $('#pre-averias-lista').append(li);
                        total_servicio();
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
    
    function total_servicio(){
        let precios = $('.tr-averias-precios');
        let total = 0;
        for(let i=0; i<precios.length; i++){
            let p = parseFloat(precios[i].innerText);
            total += p;
        }
        $('#pre-orden-total').text(total);

    }

    function buscar_mecanico(){
        $('#buscar-mecanico').keyup(function(){
            let texto = $('#buscar-mecanico').val();
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'mecanico/search/' + texto,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    console.log(response);
                    if(response.status){
                        let tr = '';
                        let i = 1;
                        
                        response.mecanicos.forEach(element => {
                            let d = (element.status == 'D') ? 'Sí' : 'No';
                            let btn = (element.status == 'D') ? '' : 'disabled';
                            let bg = (element.status == 'D') ? '' : 'style="background-color: #ccc"';
    
                            tr += `<tr ${bg} id="fila-mecanico-${element.id}">
                                <td>${i}</td>
                                <td style="display: none">${element.id}</td>
                                <td>${element.cedula}</td>mecanico
                                <td>${element.nombres}</td>
                                <td>${element.apellidos}</td>
                                <td style="display: none">${element.telefono}</td>
                                <td style="display: none">${element.correo}</td>
                                <td>${d}</td>
                                <td style="display: none">${element.img}</td>
                                <td>
                                    <div class="div">
                                        <button ${btn} data-dismiss="modal" class="btn btn-danger btn-sm" onclick="seleccionar_mecanico(${element.id})">
                                            <i class="fas fa-check"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>`;
                          i++;
                        });
                        $('#mecanico-body').html(tr);
    
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

    function guardar_orden(){
        $('#guardar-orden').click(function(){
            let cliente_id = $('#cliente-id').val();
            let vehiculo_id = $('#vehiculo-id').val();
            let usuario_id = JSON.parse(localStorage.getItem('sesion')).id;
            let mecanico_id = $('#mecanico-id').val();
            let fecha_trabajo = $('#orden-inicio-fecha').val();
            let hora_inicio = $('#orden-inicio-hora').val() + ':00';
            let fecha_trabajo_salida = $('#orden-fin-fecha').val();
            let hora_salida = $('#orden-fin-hora').val() + ':00';
            let descripcion = $('#orden-descripcion').val();
            let suma = $('#pre-orden-total').text();
            let tr_averias = $('.tr-averia');
            let averias = [];

            let json = {
                orden: {
                    cliente_id,
                    vehiculo_id,
                    usuario_id,
                    mecanico_id,
                    fecha_trabajo,
                    hora_inicio,
                    fecha_trabajo_salida,
                    hora_salida,
                    descripcion,
                    suma
                }
            };

            if(validar_orden(json)){
                //console.log(json);
                if(tr_averias.length > 0){
                    for(let i=0; i<tr_averias.length; i++){
                        let objeto = {averias_fallas_id: tr_averias[i].innerText};
                        averias.push(objeto);
                    }
                    json.averias = averias;
                    //console.log(json);
                           
                    let hoy = moment().get('year')+'-'+(moment().get('month')+1)+'-'+moment().get('date') + ' ' + '7:00:00';
                    //let actual = moment(hoy,"YYYY MM DD hh:mm:ss");
                    let m_inicio = fecha_trabajo + ' ' + hora_inicio;
                    let m_fin = fecha_trabajo_salida + ' ' + hora_salida;
                    //console.log(m_inicio);
                    if(moment(hoy).isAfter(m_inicio)) 
                    {
                        Swal.fire(
                            'Orden de Trabajo',
                            'La fecha de inicio no puede ser menor a la de hoy',
                            'error'
                          )
                    }else
                    if(moment(m_inicio).isAfter(m_fin)){
                        Swal.fire(
                            'Orden de Trabajo',
                            'La fecha de fin no puede ser menor a la de inicio',
                            'error'
                          )
                    }
                    else{
                        console.log(json);
                        ajax_guardar(json);
                    }
                }else{
                    Swal.fire(
                        'Orden de Trabajo',
                        'Debe seleccionar al menos un servicio',
                        'warning'
                      );
                }
            }
        });
    }

    function validar_orden(json){
        let orden = json.orden;
        if(orden.cliente_id.length == 0){
            Swal.fire(
                'Orden de Trabajo',
                'Debe seleccionar un cliente',
                'warning'
              );
            return false;
        }else
        if(orden.vehiculo_id == 0){
            Swal.fire(
                'Orden de Trabajo',
                'Debe seleccionar un vehículo',
                'warning'
              );
            return false;
        }else
        if(orden.mecanico_id == 0){
            Swal.fire(
                'Orden de Trabajo',
                'Debe seleccionar un mecánico',
                'warning'
              );
            return false;
        }else
        if(orden.fecha_trabajo.length == 0){
            Swal.fire(
                'Orden de Trabajo',
                'Debe ingresar una fecha de trabajo',
                'warning'
              );
            return false;
        }else
        if(orden.hora_inicio.length == 0){
            Swal.fire(
                'Orden de Trabajo',
                'Debe ingresar una hora de inicio',
                'warning'
              );
            return false;
        }else
        if(orden.fecha_trabajo_salida.length == 0){
            Swal.fire(
                'Orden de Trabajo',
                'Debe ingresar una fecha de salida',
                'warning'
              );
            return false;
        }else
        if(orden.hora_salida.length == 0){
            Swal.fire(
                'Orden de Trabajo',
                'Debe ingresar una hora de salida',
                'warning'
              );
            return false;
        }
        else{
            return true;
        }
    }

    function ajax_guardar(json){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'orden/save',
            // especifica si será una petición POST o GET
            type : 'POST',

            data : "data=" + JSON.stringify(json),
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                if(response.status){
                    Swal.fire(
                        'Orden de Trabajo',
                        response.mensaje,
                        'success'
                    );
                    reset();
                }else{
                    Swal.fire({
                        title: 'Error',
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

    function cargar_fecha_hora(){
        update_fecha_inicio();

        function update_fecha_inicio(){
            $('#orden-inicio-fecha').blur(function(){
                let fecha = $('#orden-inicio-fecha').val();
                $('#fecha_inicio').text(fecha);
            });
        }
        update_hora_inicio();
        function update_hora_inicio(){
            $('#orden-inicio-hora').blur(function(){
                let hora_ini = $('#orden-inicio-hora').val();
                $('#hora_inicio').text(hora_ini);
            });
        }
        update_fecha_fin();
        function update_fecha_fin(){
            $('#orden-fin-fecha').blur(function(){
                let fecha_fina = $('#orden-fin-fecha').val();
                $('#fecha_finaliza').text(fecha_fina);
            });
        }
        update_hora_fin();
        function update_hora_fin(){
            $('#orden-fin-hora').blur(function(){
                let hora_fina = $('#orden-fin-hora').val();
                $('#hora_finaliza').text(hora_fina);
            });
        }
    }

    function reset(){
        $('#cliente-id').val('');
        $('#cliente-cedula').val('');
        $('#cliente-nombres').val('');
        $('#cliente-apellidos').val('');
        $('#cliente-telefono').val('');
        $('#cliente-correo').val('');
        $('#vehiculo-id').val('');
        let option = '<option value=0>Seleccione una Placa</option>';
        $('#select-placa').html(option);
        $('#vehiculo-marca').val('');
        $('#vehiculo-modelo').val('');
        $('#vehiculo-color').val('');
        $('#mecanico-id').val('');
        $('#mecanico-cedula').val('');
        $('#mecanico-nombre').val('');
        $('#mecanico-apellido').val('');
        $('#mecanico-telefono').val('');
        let img = urlServidor + 'resources/usuarios/default.jpg' ;
        $('#macanico-imagen').attr('src',img);
        $('#pre-orden-mecanico').text('------------');
        $('#pre-orden-cliente').text('------------');
        $('#pre-orden-vehiculo').text('------------');
        $('#pre-averias-lista').text('');
        $('#items-averias').html('')
        $('#pre-orden-total').text('0.00');
        $('#fecha_inicio').text('-/-/- ');
        $('#hora_inicio').text('-:-:-');
        $('#fecha_finaliza').text('-/-/- ');
        $('#hora_finaliza').text('-:-:-');
        $('#orden-descripcion').val('');
        $('#orden-inicio-fecha').val('');
        $('#orden-inicio-hora').val('');
        $('#orden-fin-fecha').val('');
        $('#orden-fin-hora').val('');
    }   

    function borrar_datos(){
        $('#borrar-datos').click(function(){
            reset();
        })
    }
});

function seleccionar_cliente(id){
    let fila = '#fila-cliente-'+id;
    let f = $(fila)[0].children;
    
    let cedula = f[2].innerText;
    let nombres = f[3].innerText;
    let apellidos = f[4].innerText;
    let telefono = f[5].innerText;
    let correo = f[6].innerText;
    
    $('#cliente-id').val(id);
    $('#cliente-cedula').val(cedula);
    $('#cliente-nombres').val(nombres);
    $('#cliente-apellidos').val(apellidos);
    $('#cliente-telefono').val(telefono);
    $('#cliente-correo').val(correo);

    $('#pre-orden-cliente').text(nombres + ' ' + apellidos);

    $.ajax({
        // la URL para la petición
        url : urlServidor + 'vehiculo/search/'+id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                let option = '<option value=0>Seleccione una Placa</option>';
                
                response.vehiculos.forEach(element =>{
                    option += `<option value=${element.vehiculo_id}>${element.placa}</option>`;
                });
                //console.log(option);
                $('#select-placa').html(option);
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: 'El cliente no tiene vehículos',
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
        $('#vehiculo-id').val('');
        $('#vehiculo-marca').val('');
        $('#vehiculo-modelo').val('');
        $('#vehiculo-color').val('');
}

function seleccionar_mecanico(id){
    let fila = '#fila-mecanico-'+id;
    let f = $(fila)[0].children;
    
    let cedula = f[2].innerText;
    let nombres = f[3].innerText;
    let apellidos = f[4].innerText;
    let telefono = f[5].innerText;
    let imagen = f[8].innerText;

    let img = (imagen != 'default.jpg') ? urlServidor + 'resources/usuarios/' + imagen : urlServidor + 'resources/usuarios/default.jpg' ;
    
    $('#mecanico-id').val(id);
    $('#mecanico-cedula').val(cedula);
    $('#mecanico-nombre').val(nombres);
    $('#mecanico-apellido').val(apellidos);
    $('#mecanico-telefono').val(telefono);

    $('#macanico-imagen').attr('src',img);

    $('#pre-orden-mecanico').text(nombres + ' ' + apellidos);

}

function borrar_item(id){
    let id_tr = '#fila-averia-' + id;
    let id_li = '#li-averia-' + id;

    $(id_tr).remove();
    $(id_li).remove();
    total_servicio2();
}

function total_servicio2(){
    let precios = $('.tr-averias-precios');
    let total = 0;
    for(let i=0; i<precios.length; i++){
        let p = parseFloat(precios[i].innerText);
        total += p;
    }
    $('#pre-orden-total').text(total);

}
