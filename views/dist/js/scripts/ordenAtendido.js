$(function(){

    _init();

    function _init(){
        ordenes_atendida_detalle();
        imprimir_orden();
    }


    function ordenes_atendida_detalle(){
        let usuario = JSON.parse(localStorage.getItem('sesion'));
        let persona_id = usuario.persona_id;
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'orden/estado/' + persona_id + '/' + 1,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) { 
                console.log(response);
                let div = '';
                if(response.length > 0){
                    response.forEach(element => {
                        div += `<div class="col-12 col-md-6 col-lg-4">
                        <div class="card card-success shadow">
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
                                <div class="row">
                                    <div class="col-12 btn-group-sm text-center">
                                        <button class="btn btn-outline-primary w-100 mt-2" onclick="ver(${element.orden.id})" data-toggle="modal" data-target="#orden_detalle"
                                            data-backdrop="static" data-keyboard="false"><i
                                                class="fas fa-eye mr-2"></i>Detalle</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>` ;
                    });
                }else{
                    div = `<div class="col-12">
                    <div class="alert alert-success" role="alert">
                    No hay Ordenes Atendidas Disponibles
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

    function imprimir_orden(){
        $('#btn-imprimir').click(function(){
            let element = document.getElementById('modal-body-orden');
            let opt = {
            margin:       1,
            filename:     'orden_trabajo_atendida.pdf',
            image:        { type: 'jpeg', quality: 1.5 },
            html2canvas:  { scale: 1 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            // New Promise-based usage:
            html2pdf().set(opt).from(element).save();
                    });
    }
});

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