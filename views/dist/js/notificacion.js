$(function(){

    _init();

    function _init(){
        generar_notificacion();
    }

    function generar_notificacion(){
        let usuario = JSON.parse(localStorage.getItem('sesion'));

        setInterval(()=>{
            if(usuario.rol_id == 1){
                generar(usuario);
            }
        },1000 * 5)
    }

    function generar(usuario){
        let json = {
            notificacion :{
                rol_id : usuario.rol_id
            }
        }

        $.ajax({
            // la URL para la petición
            url : urlServidor + 'notificacion/generar',
            data : "data=" + JSON.stringify(json),
            // especifica si será una petición POST o GET
            type : 'POST',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) { 
                let div = '';
                if(response.status && response.notificacion.cantidad > 0){
                    let notificacion = response.notificacion;
                    $('#bage-notifi').removeClass('d-none');
                    $('#bage-notifi').text(notificacion.cantidad);

                    notificacion.data.forEach(element => {
                        div += ` <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                          <i class="${element.icono} mr-2"></i> ${element.short}
                          <span class="float-right text-muted text-sm"> ${element.hace}</span>
                        </a>`;
                    });
                }else{
                    $('#bage-notifi').addClass('d-none');
                    $('#bage-notifi').text('0');
                }

                $('#box-notifications').html(div);
                $('#cant-notificaciones').text(response.notificacion.cantidad);
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