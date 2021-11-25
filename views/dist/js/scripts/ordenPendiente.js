/* $(function(){ */

    _init();

    function _init(){
        ordenes_pendiente_detalle();
    }

    function ordenes_pendiente_detalle(){
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
                    let label = '';

                    response.forEach(element => {
                        let averias = element.averias;

                        averias.forEach(a => {
                            label += `<label>
                                <i class="fas fa-minus mr-2"></i>
                                <span> ${a.averia} </span>
                            </label>`;
                        });

                        div += ` <div class="col-12 col-md-6 col-lg-4">
                        <div class="card card-danger shadow">
                            <div class="card-header d-flex">
                                Orden :
                                <b class="ml-3">${element.orden.id}</b>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <small class="ml-2 text-danger title-orden-card">Datos de la Orden</small>
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label>
                                        <i class="fas fa-key mr-2"></i>
                                            <span>Código</span></label>
                                        <span> ${element.orden.codigo}</span>
                                    </div>
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label>
                                            <i class="fas fa-calendar-day mr-2"></i>
                                            <span>Creado</span></label>
                                        <span> ${element.orden.fecha}</span>
                                    </div>
        
                                    <small class="ml-2 text-danger title-orden-card">Datos del Cliente</small>
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label>
                                            <i class="fas fa-user mr-2"></i>
                                            <span>Nombres</span></label>
                                        <span> ${element.orden.cliente.persona.nombres}</span>
                                    </div>
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label>
                                            <i class="fas fa-user mr-2"></i>
                                            <span>Apellidos</span></label>
                                        <span> ${element.orden.cliente.persona.apellidos}</span>
                                    </div>
        
                                    <small class="ml-2 text-danger title-orden-card">Datos del Vehículo</small>
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label>
                                            <i class="fas fa-car mr-2"></i>
                                            <span>Placa</span></label>
                                        <span> ${element.orden.vehiculo.placa}</span>
                                    </div>
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label>
                                            <i class="fas fa-car mr-2"></i>
                                            <span>Marca</span></label>
                                        <span> ${element.orden.vehiculo.marca.nombre}</span>
                                    </div>
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label>
                                            <i class="fas fa-car mr-2"></i>
                                            <span>Modelo</span></label>
                                        <span> ${element.orden.vehiculo.modelo}</span>
                                    </div>
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label>
                                            <i class="fas fa-car mr-2"></i>
                                            <span>Color</span></label>
                                        <span> ${element.orden.vehiculo.color}</span>
                                    </div>
                                    <small class="ml-2 text-danger title-orden-card">Fecha de Trabajo</small>
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label>
                                            <i class="fas fa-clock mr-2"></i>
                                            <span>Inicio</span></label>
                                        <span> ${element.orden.fecha_trabajo} ${element.orden.hora_inicio}</span>
                                    </div>
                                    <div class="col-12 form-group d-flex justify-content-between" style="margin-bottom: 0px">
                                        <label>
                                            <i class="fas fa-clock mr-2"></i>
                                            <span>Fin</span></label>
                                        <span> ${element.orden.fecha_trabajo_salida} ${element.orden.hora_salida}</span>
                                    </div>
                                    <small class="ml-2 text-danger title-orden-card">Averías y Fallas</small>
                                    <div class="col-12 form-group d-flex justify-content-between flex-column" style="margin-bottom: 0px">
                                       ${label}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <button class="btn btn-success" onclick=cambiar_estado(${element.orden.id},4,'O')><i class="fas fa-check mr-2"></i>Aceptar</button>
                                        <button class="btn btn-danger" onclick=cambiar_estado(${element.orden.id},2,'D')><i class="fas fa-times mr-2"></i>Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    label = '';
                    });
                }else{
                    div = `<div class="col-12">
                    <div class="alert alert-danger" role="alert">
                    No hay Ordenes Pendientes Disponibles
                    </div>
                    </div>`;
                }     
                $('#orden_pendiente_detalle').html(div);
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }
/* });
 */
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
                  ordenes_pendiente_detalle();

                  if(estado_id == '4'){
                    agregar_actividad(id);
                  }
            }
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });

    function agregar_actividad(id){
        let actividad = {
            orden_id: id,
            detalle: 'Orden en Proceso',
            progreso: 10,
            total: 10,
            faltante: 90
        };

        let json = {
            actividad: actividad
        }

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'actividad/save',
            data : "data=" + JSON.stringify(json),
            // especifica si será una petición POST o GET
            type : 'POST',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) { 
                if(response.status){
                   console.log('Actividad Agregada');
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
}

