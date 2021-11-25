$(function(){

    _init();

    function _init(){
        listar_ordenes_pendiente(1,3);
        listar_ordenes_proceso(1,4);
        listar_ordenes_atendidos(1,1);
        filtrar_lista_ordenes_pendiente();
        filtrar_lista_ordenes_en_proceso();
        filtrar_lista_ordenes_atentido();
    }

    function listar_ordenes_pendiente(op,estado){        
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'orden/visualizar/' + op + '/' + estado,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                let option = '';
                if(response.status){
                    let collapse = '';
                    response.ordenes.forEach((element,i) => {
                        collapse = 'collapse' + i;
                        let show = (i == 0) ? 'show' : '';
                        let fecha = element.orden.created_at.substring(0,10);
                        let hora = element.orden.created_at.substring(11,19);

                        option += `<div class="card card-danger">
                        <div class="card-header">
                            <h4 class="card-title w-100">
                                <a class="d-block w-100" data-toggle="collapse"
                                    href="#${collapse}">
                                    Código: ${element.orden.codigo}
                                </a>
                            </h4>
                        </div>
                        <div id="${collapse}" class="collapse ${show}"
                            data-parent="#accordion">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label class="text-primary">
                                            <i class="fas fa-user mr-2"></i>
                                            <span>Cliente</span></label>
                                        <strong>${element.orden.cliente.persona.nombres + ' ' + element.orden.cliente.persona.apellidos}</strong>
                                    </div>

                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label class="text-primary">
                                            <i class="fas fa-car-side mr-2"></i>
                                            Vehículo</label>
                                        <strong>${element.orden.vehiculo.placa}</strong>
                                    </div>

                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label class="text-primary">
                                            <i class="fas fa-user-cog mr-2"></i>
                                            Mecánico</label>
                                        <strong>${element.orden.mecanico.persona.nombres + ' ' + element.orden.mecanico.persona.apellidos}</strong>
                                    </div>

                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <span>
                                            <small>Creado: </small>
                                            <small>${fecha} ${hora}</small>
                                        </span>

                                        <span>
                                            <small class="text-primary">
                                                <a style="cursor:pointer" onclick=ver_orden(${element.orden.id})>Ver más</a>
                                            </small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    });
                    $('#accordion').html(option);
                }else{
                    $('#accordion').html(option);
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

    function listar_ordenes_proceso(op,estado){       
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'orden/visualizar/' + op + '/' + estado,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                let option = '';
                if(response.status){
                    let collapse = '';
                    response.ordenes.forEach((element,i) => {
                        collapse = 'collapse' + i;
                        let show = (i == 0) ? 'show' : '';
                        let fecha = element.orden.created_at.substring(0,10);
                        let hora = element.orden.created_at.substring(11,19);

                        option += `<div class="card card-warning">
                        <div class="card-header">
                            <h4 class="card-title w-100">
                                <a class="d-block w-100" data-toggle="collapse"
                                    href="#${collapse}">
                                    Código: ${element.orden.codigo}
                                </a>
                            </h4>
                        </div>
                        <div id="${collapse}" class="collapse ${show}"
                            data-parent="#accordion">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label class="text-primary">
                                            <i class="fas fa-user mr-2"></i>
                                            <span>Cliente</span></label>
                                        <strong>${element.orden.cliente.persona.nombres + ' ' + element.orden.cliente.persona.apellidos}</strong>
                                    </div>

                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label class="text-primary">
                                            <i class="fas fa-car-side mr-2"></i>
                                            Vehículo</label>
                                        <strong>${element.orden.vehiculo.placa}</strong>
                                    </div>

                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label class="text-primary">
                                            <i class="fas fa-user-cog mr-2"></i>
                                            Mecánico</label>
                                        <strong>${element.orden.mecanico.persona.nombres + ' ' + element.orden.mecanico.persona.apellidos}</strong>
                                    </div>

                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <span>
                                            <small>Creado: </small>
                                            <small>${fecha} ${hora}</small>
                                        </span>

                                        <span>
                                            <small class="text-primary">
                                                <a style="cursor:pointer" onclick=ver_orden_proceso(${element.orden.id})>Ver más</a>
                                            </small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    });
                    $('#accordion2').html(option);
                }else{
                    $('#accordion2').html(option);
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

    function listar_ordenes_atendidos(op,estado){       
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'orden/visualizar/' + op + '/' + estado,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                let option = '';
                if(response.status){
                    let collapse = '';
                    response.ordenes.forEach((element,i) => {
                        collapse = 'collapse' + i;
                        let show = (i == 0) ? 'show' : '';
                        let fecha = element.orden.created_at.substring(0,10);
                        let hora = element.orden.created_at.substring(11,19);

                        option += `<div class="card card-success">
                        <div class="card-header">
                            <h4 class="card-title w-100">
                                <a class="d-block w-100" data-toggle="collapse"
                                    href="#${collapse}">
                                    Código: ${element.orden.codigo}
                                </a>
                            </h4>
                        </div>
                        <div id="${collapse}" class="collapse ${show}"
                            data-parent="#accordion">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label class="text-primary">
                                            <i class="fas fa-user mr-2"></i>
                                            <span>Cliente</span></label>
                                        <strong>${element.orden.cliente.persona.nombres + ' ' + element.orden.cliente.persona.apellidos}</strong>
                                    </div>

                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label class="text-primary">
                                            <i class="fas fa-car-side mr-2"></i>
                                            Vehículo</label>
                                        <strong>${element.orden.vehiculo.placa}</strong>
                                    </div>

                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <label class="text-primary">
                                            <i class="fas fa-user-cog mr-2"></i>
                                            Mecánico</label>
                                        <strong>${element.orden.mecanico.persona.nombres + ' ' + element.orden.mecanico.persona.apellidos}</strong>
                                    </div>

                                    <div class="col-12 form-group d-flex justify-content-between"
                                        style="margin-bottom: 0px">
                                        <span>
                                            <small>Creado: </small>
                                            <small>${fecha} ${hora}</small>
                                        </span>

                                        <span>
                                            <small class="text-primary">
                                                <a style="cursor:pointer" onclick=ver_orden_atendida(${element.orden.id})>Ver más</a>
                                            </small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    });
                    $('#accordion3').html(option);
                }else{
                    $('#accordion3').html(option);
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

    function filtrar_lista_ordenes_pendiente(){
        $('#orden-filtrar-pendiente').change(function(){
            let opcion = $('#orden-filtrar-pendiente option:selected').val();
            listar_ordenes_pendiente(opcion,3);
        });
    }

    function filtrar_lista_ordenes_en_proceso(){
        $('#orden-filtrar-proceso').change(function(){
            let opcion = $('#orden-filtrar-proceso option:selected').val();
            listar_ordenes_proceso(opcion,4);
        });
    }

    function filtrar_lista_ordenes_atentido(){
        $('#orden-filtrar-atendida').change(function(){
            let opcion = $('#orden-filtrar-atendida option:selected').val();
            listar_ordenes_atendidos(opcion,1);
        });
    }

});

function ver_orden(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'orden/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            console.log(response); 
            $('#orden-default-pendiente').addClass('d-none');   
            $('#orden-pendiente').removeClass('d-none');  
            if(response.status){
                let color_vehiculo = response.orden.vehiculo.color;
                let kilometro_vehiculo = response.orden.vehiculo.kilometro;
                let marca_vehiculo = response.orden.vehiculo.marca.nombre;
                let modelo_vehiculo = response.orden.vehiculo.modelo;
                let placa_vehiculo = response.orden.vehiculo.placa;
                let cedula_cliente = response.orden.cliente.persona.cedula;
                let nombres_cliente = response.orden.cliente.persona.nombres + ' ' + response.orden.cliente.persona.apellidos;
                let telefono_cliente = response.orden.cliente.persona.telefono;
                let nombres_operario = response.orden.mecanico.persona.nombres + ' ' + response.orden.mecanico.persona.apellidos;
                let orden_fecha = response.orden.fecha;
                let orden_id= response.orden.id;

                let averias = response.averias;
                let li = '';
                averias.forEach(element => {
                    li += `<li>${element.averia}</li>`;
                });
                $('#orden-averias').html(li);
                
                $('#orden_color_vehiculo').text(color_vehiculo);
                $('#orden_kilometro_vehiculo').text(kilometro_vehiculo);
                $('#orden_marca_vehiculo').text(marca_vehiculo);
                $('#orden_modelo_vehiculo').text(modelo_vehiculo);
                $('#orden_placa_vehiculo').text(placa_vehiculo);
                $('#orden_cedula_cliente').text(cedula_cliente);
                $('#orden_nombres_cliente').text(nombres_cliente);
                $('#orden_telefono_cliente').text(telefono_cliente);
                $('#orden_nombres_operario').text(nombres_operario);
                $('#orden_fecha').text(orden_fecha);
                $('#orden_id').text(orden_id);
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

function ver_orden_proceso(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'orden/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            console.log(response); 
            $('#orden-default-proceso').addClass('d-none');   
            $('#orden-proceso').removeClass('d-none');  
            if(response.status){
                let color_vehiculo = response.orden.vehiculo.color;
                let kilometro_vehiculo = response.orden.vehiculo.kilometro;
                let marca_vehiculo = response.orden.vehiculo.marca.nombre;
                let modelo_vehiculo = response.orden.vehiculo.modelo;
                let placa_vehiculo = response.orden.vehiculo.placa;
                let cedula_cliente = response.orden.cliente.persona.cedula;
                let nombres_cliente = response.orden.cliente.persona.nombres + ' ' + response.orden.cliente.persona.apellidos;
                let telefono_cliente = response.orden.cliente.persona.telefono;
                let nombres_operario = response.orden.mecanico.persona.nombres + ' ' + response.orden.mecanico.persona.apellidos;
                let orden_fecha = response.orden.fecha;
                let orden_id= response.orden.id;

                let averias = response.averias;
                let li = '';
                averias.forEach(element => {
                    li += `<li>${element.averia}</li>`;
                });
                $('#orden-averias_pro').html(li);

                $('#orden_color_vehiculo_pro').text(color_vehiculo);
                $('#orden_kilometro_vehiculo_pro').text(kilometro_vehiculo);
                $('#orden_marca_vehiculo_pro').text(marca_vehiculo);
                $('#orden_modelo_vehiculo_pro').text(modelo_vehiculo);
                $('#orden_placa_vehiculo_pro').text(placa_vehiculo);
                $('#orden_cedula_cliente_pro').text(cedula_cliente);
                $('#orden_nombres_cliente_pro').text(nombres_cliente);
                $('#orden_telefono_cliente_pro').text(telefono_cliente);
                $('#orden_nombres_operario_pro').text(nombres_operario);
                $('#orden_fecha_pro').text(orden_fecha);
                $('#orden_id_pro').text(orden_id);
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

function ver_orden_atendida(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'orden/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            console.log(response); 
            $('#orden-default-atendida').addClass('d-none');   
            $('#orden-atendida').removeClass('d-none');  
            if(response.status){
                let color_vehiculo = response.orden.vehiculo.color;
                let kilometro_vehiculo = response.orden.vehiculo.kilometro;
                let marca_vehiculo = response.orden.vehiculo.marca.nombre;
                let modelo_vehiculo = response.orden.vehiculo.modelo;
                let placa_vehiculo = response.orden.vehiculo.placa;
                let cedula_cliente = response.orden.cliente.persona.cedula;
                let nombres_cliente = response.orden.cliente.persona.nombres + ' ' + response.orden.cliente.persona.apellidos;
                let telefono_cliente = response.orden.cliente.persona.telefono;
                let nombres_operario = response.orden.mecanico.persona.nombres + ' ' + response.orden.mecanico.persona.apellidos;
                let orden_fecha = response.orden.fecha;
                let orden_id= response.orden.id;

                let averias = response.averias;
                let li = '';
                averias.forEach(element => {
                    li += `<li>${element.averia}</li>`;
                });
                $('#orden-averias_ate').html(li);

                $('#orden_color_vehiculo_ate').text(color_vehiculo);
                $('#orden_kilometro_vehiculo_ate').text(kilometro_vehiculo);
                $('#orden_marca_vehiculo_ate').text(marca_vehiculo);
                $('#orden_modelo_vehiculo_ate').text(modelo_vehiculo);
                $('#orden_placa_vehiculo_ate').text(placa_vehiculo);
                $('#orden_cedula_cliente_ate').text(cedula_cliente);
                $('#orden_nombres_cliente_ate').text(nombres_cliente);
                $('#orden_telefono_cliente_ate').text(telefono_cliente);
                $('#orden_nombres_operario_ate').text(nombres_operario);
                $('#orden_fecha_ate').text(orden_fecha);
                $('#orden_id_ate').text(orden_id);
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