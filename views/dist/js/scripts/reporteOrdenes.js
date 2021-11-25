$(function(){
    
    _init();

    function _init(){
        cargar_mecanico();
        cargar_data();
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
                //console.log(response);
                let option = '<option value="0">Seleccione una opción</option>';
                if(response.status){
                    response.mecanico.forEach(element => {
                        option += `<option value=${element.id}>${element.persona.nombres} ${element.persona.apellidos}</option>`;
                    });
                    option += '<option value="-1">Todos</option>';
                    $('#date-orden-mecanico').html(option);
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

    function cargar_data(){
        $('#orden-play').click(function(){

            let desde = $('#date-orden-inicio').val();
            let hasta = $('#date-orden-fin').val();
            let mecanico = $('#date-orden-mecanico option:selected').val(); 
            
            if(desde.length == 0){
                Swal.fire(
                    'Reportes',
                    'Seleccione una Fecha de Inicio',
                    'warning'
                  )
            }else
            if(hasta.length == 0){
                Swal.fire(
                    'Reportes',
                    'Seleccione una Fecha de Fin',
                    'warning'
                  )
            }else
            if(mecanico == '0'){
                Swal.fire(
                    'Reportes',
                    'Seleccione un Mecánico',
                    'warning'
                  )
            }
            else{
                $('#inicio-reporte').text(desde);
                $('#fin-reporte').text(hasta);
                if(moment(desde).isAfter(hasta)){
                    Swal.fire(
                        'Reportes',
                        'La fecha hasta no puede ser menor a la de inicio',
                        'error'
                      )
                }else{
                    $.ajax({
                        // la URL para la petición
                        url : urlServidor + 'mecanico/reporteorden/' + desde + '/' + hasta + '/' + mecanico,
                        // especifica si será una petición POST o GET
                        type : 'GET',
                        // el tipo de información que se espera de respuesta
                        dataType : 'json',
                        success : function(response) { 
                            console.log(response);
                            if(response.lista.length > 0){
                                let tr = '';
                                let i = 1;
    
                                response.lista.forEach(element => {
                                    let color = '';
    
                                    if(element.actividad.total === 0){
                                        color = 'danger';
                                    }else
                                    if(element.actividad.total > 0 && element.actividad.total <= 99){
                                        color = 'warning';
                                    }else{
                                        color = 'success';
                                    }
                                    tr += ` <tr>
                                        <td>${i}</td>
                                        <td>${element.codigo}</td>
                                        <td>${element.mecanico.nombres} ${element.mecanico.apellidos}</td>
                                        <td>${element.actividad.detalle}</td>
                                        <td>${element.estado}</td>
                                        <td>
                                            <div class="progress progress-xs">
                                                <div class="progress-bar progress-bar-danger bg-${color}"
                                                    style="width: ${element.actividad.total}%"></div>
                                            </div>
                                        </td>
                                        <td>${element.actividad.total}%</td>
                                    </tr>`; 
                                    i++
                                });
                                $('#body-reporte-ordenes').html(tr);
                                $('#tabla-reporte').removeClass('d-none');
    
                                /* Canvas 1 */
                               $('#box-canvas1').html('');
                               let canvas1 =   `<canvas id="orden-estado"
                                    style="min-height: 225px; height: 225px; max-height: 300px; max-width: 100%; margin-top: 22px"></canvas>`;
                                $('#box-canvas1').html(canvas1);
    
                                new Chart(document.getElementById("orden-estado"), {
                                    type: 'bar',
                                    data: {
                                      labels: response.orden.labels,
                                      datasets: [
                                        {
                                          label: "Cantidad",
                                          backgroundColor: ["#fff706", "#fe0612","#282f34","#009000"],
                                          data: response.orden.data
                                        }
                                      ]
                                    },
                                    options: {
                                      legend: { display: false },
                                      title: {
                                        display: true,
                                        text: 'Cantidad de Ordenes por Estado'
                                      }
                                    }
                                });
                
                                $('#box-canvas-mecanico-2').html('');
                                let boxCanvas2 =   `<canvas id="orden-mecanico"
                                    style="min-height: 225px; height: 225px; max-height: 300px; max-width: 100%; margin-top: 22px"></canvas>`;
                                $('#box-canvas-mecanico-2').html(boxCanvas2);
    
                                let grafica = document.getElementById('orden-mecanico').getContext('2d');
                                const etiquetas = response.mecanico.labels;
                                const datosIngresos = {
                                    data: response.mecanico.data, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                                    // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
                                    backgroundColor : ['#f56954', '#007bff', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#ffff00'],
                                    borderWidth: 1,// Ancho del borde
                                };
    
                                new Chart(grafica, {
                                    type: 'pie',// Tipo de gráfica. Puede ser dougnhut o pie
                                    data: {
                                        labels: etiquetas,
                                        datasets: [
                                            datosIngresos,
                                            // Aquí más datos...
                                        ]
                                    },
                                });
                            }else{
                                Swal.fire(
                                    'Reportes',
                                    'No hay información disponible',
                                    'error'
                                  )
                                  $('#body-reporte-ordenes').html('');
                                  $('#box-canvas1').html('');
                                  $('#box-canvas-mecanico-2').html('');
                                  $('#tabla-reporte').addClass('d-none');
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

        });

        $('#orden-pdf').click(function(){
            let datos = $('#body-reporte-ordenes tr');
            if(datos.length == 0){
                Swal.fire(
                    'Reportes',
                    'No hay datos disponibles en la tabla',
                    'error'
                  )
            }else{
                let element = document.getElementById('tabla-reporte');
                let opt = {
                margin:       0.5,
                filename:     'Reporte de Ordenes.pdf',
                image:        { type: 'jpeg', quality: 3 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
                };

                html2pdf().set(opt).from(element).save();
            }
        });
    }
}); 