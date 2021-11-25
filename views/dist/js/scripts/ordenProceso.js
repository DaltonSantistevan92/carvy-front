/* $(function(){
 */
    _init();

    function _init(){
        ordenes_proceso_detalle();
        imprimir_orden();
        capturar_datos();
        agregar_observacion();
        resetBasic();
    }

    function ordenes_proceso_detalle(){
        let usuario = JSON.parse(localStorage.getItem('sesion'));
        let persona_id = usuario.persona_id;

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'orden/estado/' + persona_id + '/' + 4,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) { 
                console.log(response);
                let div = '';
                if(response.length > 0){
                    response.forEach(element => {
                        //console.log(element.ultima_actividad);
                        let eventoClick = (element.ultima_actividad.total == 100) ? `onclick="cambiar_estado(${element.orden.id},1,'D')"`: '';
                        let atributoDisabled = (element.ultima_actividad.total == 100) ? '' : 'disabled';

                        div += `<div class="col-12 col-md-6 col-lg-4">
                        <div class="card card-warning shadow">
                            <div class="card-header d-flex">
                                Orden :
                                <b class="ml-3" id="orden-proceso-id">${element.orden.id}</b>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <small class="ml-2 text-danger title-orden-card">Datos de la Orden</small>
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label>
                                            <i class="fas fa-key mr-2"></i>
                                            <span>Código</span></label>
                                        <span>  ${element.orden.codigo}</span>
                                    </div>
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label>
                                            <i class="fas fa-calendar-day mr-2"></i>
                                            <span>Creado</span></label>
                                        <span>  ${element.orden.fecha}</span>
                                    </div>
        
                                    <small class="ml-2 text-danger title-orden-card">Trabajo</small>
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label>
                                            <i class="fas fa-car mr-2"></i>
                                            <span>Placa</span></label>
                                        <span> ${element.orden.vehiculo.placa}</span>
                                    </div>
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label>
                                            <i class="fas fa-clock mr-2"></i>
                                            <span>Inicio</span></label>
                                        <span> ${element.orden.fecha_trabajo} ${element.orden.hora_inicio}</span>
                                    </div>
                                </div>
                                <div class="row mb-3 mt-2">
                                    <div class="col-12 d-flex flex-column">
                                        <a class="text-warning" style="cursor: pointer" onclick='ir_repuesto(${element.orden.id})'><i class="fas fa-tools mr-2"></i>Agregar Repuesto</a>
                                        <a class="text-warning" style="cursor: pointer" onclick='modal_actividad(${element.orden.id},"${element.orden.codigo}")'><i class="fas fa-clipboard-check mr-2"></i>Agregar Actividad</a>
                                        <a class="text-warning" href="#" data-toggle="modal" data-target="#orden_observacion"
                                            data-backdrop="static" data-keyboard="false"><i class="far fa-comment mr-2"></i>Agregar Observación</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 btn-group-sm text-center">
                                        <button class="btn btn-outline-primary" onclick="ver(${element.orden.id})" data-toggle="modal" data-target="#orden_detalle"
                                            data-backdrop="static" data-keyboard="false"><i
                                                class="fas fa-eye mr-2"></i>Detalle</button>
                                        <button class="btn btn-outline-success" ${atributoDisabled} ${eventoClick}><i class="fas fa-check mr-2"></i>Atendido</button>
                                        <button class="btn btn-outline-danger" onclick="cambiar_estado(${element.orden.id},2,'D')"><i class="fas fa-times mr-2"></i>Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>` ;
                    });
                }else{
                    div = `<div class="col-12">
                    <div class="alert alert-warning" role="alert">
                    No hay Ordenes En Proceso Disponibles
                    </div>
                    </div>`;
                }          
                $('#orden-proceso-detalle').html(div);
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function modal_actividad(id_orden,codigo){
        cargar_actividad(id_orden);
        $('#orden-actividad').val(id_orden);
        $('#orden-codigo').val(codigo);
        $('#modal_actividad').modal('show');
    }

    function cargar_actividad(id){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'actividad/listar/' + id,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) { 
                console.log(response);
                let tr = '';
                let i = 1;
                if(response.status){
                    response.actividades.forEach(element => {
                        tr += `<tr>
                            <td>${i}</td>
                            <td>${element.detalle}</td>
                            <td class="text-success">${element.total}<i class="fas fa-arrow-up ml-2"></i></td>
                            <td class="text-danger">${element.faltante}<i class="fas fa-arrow-down ml-2"></i></td>
                        </tr>`;
                        i++;
                    });
                    $('#body-actividades').html(tr);
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

    function resetBasic(){
        $('#orden-act').val('');
        $('#orden-progreso').val('');
    }

    function capturar_datos(){
        $('#form-actividad').submit(e => {
            e.preventDefault();
            let orden_id = $('#orden-actividad').val();
            let detalle = $('#orden-act').val();
            let progreso = $('#orden-progreso').val();
    
            let json = {
                actividad: {
                    orden_id: orden_id,
                    detalle: detalle,
                    progreso: parseInt(progreso),
                }
            
            }

            if(detalle.length == '0'){
                Swal.fire(
                    'Orden de Trabajo',
                    'Ingrese el detalle de la actividad',
                    'warning'
                  )
            }else
            if(progreso == '0'){
                Swal.fire(
                    'Orden de Trabajo',
                    'Debe ingresar un progreso mayor a 0',
                    'warning'
                  )
            }else
            if(progreso.length == '0'){
                Swal.fire(
                    'Orden de Trabajo',
                    'Ingrese un progreso de la actividad',
                    'warning'
                  )
            }else{
                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'actividad/save2',
                    // especifica si será una petición POST o GET
                    type : 'POST',
                    data: 'data=' + JSON.stringify(json),
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) { 
                        console.log(response);
                        if(response.status){
                            Swal.fire(
                                'Orden de Trabajo',
                                response.mensaje,
                                'success'
                              )
                              resetBasic();
                              cargar_actividad(orden_id);
                              ordenes_proceso_detalle();
                        }else{
                            Swal.fire(
                                'Orden de Trabajo',
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
        })
    }

    function imprimir_orden(){
        $('#btn-imprimir').click(function(){
            let element = document.getElementById('modal-body-orden');
            let opt = {
            margin:       1,
            filename:     'orden_trabajo.pdf',
            image:        { type: 'jpeg', quality: 1.5 },
            html2canvas:  { scale: 1 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            // New Promise-based usage:
            html2pdf().set(opt).from(element).save();
                    });
    }

    function agregar_observacion(){ 
        $('#btn-actualizar').click(function(){
            let observacion = $('#orden-observacion').val();
            let orden_id = $('#orden-proceso-id').text();
    
            let json = {
                data : {
                    orden: {
                        observacion
                    }
                }
            }
            console.log(json);
            console.log(orden_id);
            if(observacion.length > 0){
                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'orden/updateObservacion/' + orden_id,
                    // especifica si será una petición POST o GET
                    type : 'PUT',
                    data: JSON.stringify(json),
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) {  
                        console.log(response);
                        if(response.status){
                            Swal.fire(
                                'Actividad',
                                response.mensaje,
                                'success'
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

/* }); */

function ir_repuesto(id){
    localStorage.setItem('orden_id',id);
    location.href = urlCliente  + 'orden_trabajo/repuesto';
}

function cambiar_estado(id,estado_id,estado_mecanico){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'orden/actualizar_orden/' + id + '/' + estado_id + '/' + estado_mecanico,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) { 
            if(response.status){
                Swal.fire(
                    'Orden de Trabajo',
                    response.mensaje,
                    'success'
                  )
                  ordenes_proceso_detalle();
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

function ver(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'orden/listar/' + id ,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) { 
           console.log(response);
           if(response.status){
            $('#proceso-kilometro-orden').text(response.orden.vehiculo.kilometro);
            $('#proceso-placa-orden').text(response.orden.vehiculo.placa);
            $('#proceso-marca-orden').text(response.orden.vehiculo.marca.nombre);
            $('#proceso-modelo-orden').text(response.orden.vehiculo.modelo);
            $('#proceso-color-orden').text(response.orden.vehiculo.color);
            $('#proceso-fecha-orden').text(response.orden.fecha);
            $('#proceso-id-orden').text(response.orden.id);
            $('#proceso-cedula-cliente-orden').text(response.orden.cliente.persona.cedula);
            $('#proceso-nombre-cliente-orden').text(response.orden.cliente.persona.nombres + ' ' + response.orden.cliente.persona.apellidos);
            $('#proceso-telefono-cliente-orden').text(response.orden.cliente.persona.telefono);

            let averias = response.averias;
            let p = '';
            averias.forEach(element => {
                p += `<p class="sin-margin-x"> <i class="fas fa-check-circle fa-sm mr-2"></i> ${element.averia}</p>`;
            });
            $('#proceso-averias-orden').html(p);

            let material = response.orden.material;
            let p_ = '';
            material.forEach(e => {
                p_ += `  <div class="col-12 pl-2 border-top">
                <p class="sin-margin-x">${e.producto.nombre}</p>
            </div>`;
            });
            $('#material_orden').html(p_);

            $('#proceso-operario-orden').text(response.orden.mecanico.persona.nombres + ' ' + response.orden.mecanico.persona.apellidos);

            $('#proceso-suma-orden').text(response.orden.suma);

            $('#monto_orden').text(response.monto);
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

