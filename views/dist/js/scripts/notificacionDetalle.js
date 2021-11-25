$(function(){
    
    _init();

    function _init(){
        mostrar_notificacion();
    }

    function mostrar_notificacion(){
        let cantidad = 30;
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'notificacion/all/' + cantidad,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
               console.log(response);
               let div = '';
               if(response.status){
                   response.data.forEach(element => {
                       div += `<div class="card mt-2">
                        <div class="card-body">
                            <h5 class="card-title text-info">${element.titulo}</h5>
                            <p class="card-text">
                            <i class="${element.icono} mr-2"></i>    
                            ${element.mensaje}
                            </p>
                        </div>
                    </div>`;
                   });
                   $('#centro-notificaciones').html(div);
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