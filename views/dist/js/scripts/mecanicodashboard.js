/* $(function(){ */

    _init();

    function _init(){
        card_dashboard();
        ordenes_pendiente();
    }

    function card_dashboard(){
        let usuario = JSON.parse(localStorage.getItem('sesion'));
        let persona_id = usuario.persona_id;
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'orden/dashboard_mecanico/' + persona_id,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {   
                if(response.status){
                    $('#orden_pendiente').text(response.cantidad.pendiente);
                    $('#orden_proceso').text(response.cantidad.procesos);
                    $('#orden_atendida').text(response.cantidad.atendidos);
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

    function ordenes_pendiente(){
        let usuario = JSON.parse(localStorage.getItem('sesion'));
        let persona_id = usuario.persona_id;
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'orden/estado/' + persona_id + '/' + 3,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) { 
                let div = '';  
                if(response.length > 0){
                    console.log(response);
                    response.forEach(element => {
                        div += ` <div class="col-12 col-md-4">
                        <div class="card card-danger shadow">
                            <div class="card-header d-flex">
                                Orden :
                                <b class="ml-3">${element.orden.id}</b>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label>
                                            <i class="fas fa-key mr-2"></i>
                                            <span>Código</span></label>
                                        <span> ${element.orden.codigo}</span>
                                    </div>
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label >
                                            <i class="fas fa-car mr-2"></i>
                                            <span>Placa</span></label>
                                        <span> ${element.orden.vehiculo.placa}</span>
                                    </div>
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label>
                                            <i class="fas fa-calendar-day mr-2"></i>
                                            <span>Fecha</span></label>
                                        <span> ${element.orden.fecha}</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <button class="btn btn-success" onclick="cambiar_estado(${element.orden.id},4,'O')"><i class="fas fa-check"></i></button>
                                        <a class="btn btn-primary" href="${urlCliente}orden_trabajo/pendiente"><i class="fas fa-info-circle"></i></a>
                                        <button class="btn btn-danger" onclick="cambiar_estado(${element.orden.id},2,'D')"><i class="fas fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    });
                    $('#vista_rapida').html(div);
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
/* }); */

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
                ordenes_pendiente();
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
