$(function(){

    _init();

    function _init(){
        cargar_datos();
        card_dashboard_recepcionista();
        grafica_1();
        cargar_tabla();
    }

    function cargar_datos(){
        contar_clientes();
        
        function contar_clientes(){
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'cliente/contar',
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        $('#conta_cliente').text(response.cantidad);
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

    function card_dashboard_recepcionista(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'orden/count_estado',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {  
                console.log(response); 
                $('#orden_pendiente_re').text(response.cantidad.pendientes);
                $('#orden_proceso_re').text(response.cantidad.procesos);
                $('#orden_atendida_re').text(response.cantidad.atendidos)
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function grafica_1(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'orden/grafica_estados',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {  
                if(response.status){
                    $('#mes_orden').text(response.mes);
                    var donutChartCanvas = $('#grafica1').get(0).getContext('2d')
                    var donutData        = {
                      labels: response.porcentaje.labels,
                      datasets: [
                        {
                          data: response.porcentaje.data,
                          backgroundColor : ['#f56954', '#f39c12' , '#00a65a', '#00c0ef', '#3c8dbc', '#d2d6de'],
                        }
                      ]
                    }
                    var donutOptions     = {
                      maintainAspectRatio : false,
                      responsive : true,
                    }
                    //Create pie or douhnut chart
                    // You can switch between pie and douhnut using the method below.
                    new Chart(donutChartCanvas, {
                      type: 'doughnut',
                      data: donutData,
                      options: donutOptions
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

    function cargar_tabla(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'actividad/reciente/' + 5,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {  
                console.log(response);
                if(response.length > 0){
                    let tr = '';
                    response.forEach((element,i) => {
                        let color = '';
                        tr += `   <tr>
                        <td>${i+1}</td>
                        <td>${element.orden.codigo}</td>
                        <td>${element.orden.estado_orden.detalle}</td>
                        <td>
                            <div class="progress progress-xs">
                                <div class="progress-bar ${color}" style="width: ${element.total}%"></div>
                            </div>
                        </td>
                        <td><span class="badge ${color}">${element.total}%</span></td>
                        <td> 
                        <div class="d-flex justify-content-center">
                            <button id="btn-actividad-modal" class="btn btn-sm btn-outline-primary" onclick="ver_actividad(${element.orden_id})">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </td>
                    </tr>`;
                    });
                    $('#body-progreso').html(tr);
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

function ver_actividad(id){
        $('#modal_actividad').modal('show');
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