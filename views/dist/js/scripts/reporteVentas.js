$(function(){
  
    _init();

    function _init(){
        cargar_data();
    }

    function cargar_data(){
        $('#venta-play').click(function(){
            
            let desde = $('#date-venta-inicio').val();
            let hasta = $('#date-venta-fin').val();
            
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
            }else{
              if(moment(desde).isAfter(hasta)){
                Swal.fire(
                  'Reportes',
                  'La fecha hasta no puede menor a la fecha de inicio',
                  'error'
                )
              }else{
                $('#inicio-reporte').text(desde);
                $('#fin-reporte').text(hasta);
                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'venta/mensuales/' + desde + '/' + hasta,
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
                                tr += `<tr>
                                    <td>${i}</td>
                                    <td>${element.data.serie}</td>
                                    <td>${element.data.subtotal}</td>
                                    <td>${element.data.iva}</td>
                                    <td>${element.data.total}</td>
                                </tr>`;
                                i++;
                            });
                            $('#body-reporte-ventas').html(tr);
                            $('#tabla-reporte').removeClass('d-none');
                            $('#totales').html('Totales');
                            $('#subtotal-general').html(response.totales.subtotal);
                            $('#iva-general').html(response.totales.iva);
                            $('#total-general').html(response.totales.total);


                            /* Canvas 1 */
                            $('#box-canvas-barra-1').html('');
                            let canvas1 =   `<canvas id="box-barra1"
                                 style="min-height: 230px; height: 230px; max-height: 300px; max-width: 100%; margin-top: 22px"></canvas>`;
                             $('#box-canvas-barra-1').html(canvas1);
                            let areaChartData = {
                                labels  : response.barra.labels,
                                datasets: [
                                  {
                                    label               : 'Iva',
                                    backgroundColor     : '#f56954',
                                    pointRadius          : false,
                                    pointColor          : '#3b8bba',
                                    pointStrokeColor    : 'rgba(60,141,188,1)',
                                    pointHighlightFill  : '#fff',
                                    pointHighlightStroke: 'rgba(60,141,188,1)',
                                    data                : response.barra.dataIva
                                  },
                                  {
                                    label               : 'Subtotal',
                                    backgroundColor     : '#00a65a',
                                    pointRadius         : false,
                                    pointColor          : 'rgba(210, 214, 222, 1)',
                                    pointStrokeColor    : '#c1c7d1',
                                    pointHighlightFill  : '#fff',
                                    pointHighlightStroke: 'rgba(220,220,220,1)',
                                    data                : response.barra.dataSubtotal
                                  },
                                  {
                                    label               : 'Total',
                                    backgroundColor     : '#f39c12',
                                    pointRadius         : false,
                                    pointColor          : 'rgba(210, 214, 222, 1)',
                                    pointStrokeColor    : '#c1c7d1',
                                    pointHighlightFill  : '#fff',
                                    pointHighlightStroke: 'rgba(220,220,220,1)',
                                    data                : response.barra.dataTotal
                                  }
                                ]
                              }

                            var barChartCanvas = $('#box-barra1').get(0).getContext('2d')
                            var barChartData = $.extend(true, {}, areaChartData)
                            var temp0 = areaChartData.datasets[0]
                            var temp1 = areaChartData.datasets[1]
                            var temp2 = areaChartData.datasets[2]
                            barChartData.datasets[0] = temp1
                            barChartData.datasets[1] = temp0
                            barChartData.datasets[2] = temp2

                            var barChartOptions = {
                            responsive              : true,
                            maintainAspectRatio     : false,
                            datasetFill             : false
                            }

                            new Chart(barChartCanvas, {
                            type: 'bar',
                            data: barChartData,
                            options: barChartOptions
                            })

                            /* Canvas 2 */
                            let graficoPorcentaje        = {
                                labels: response.porcentaje.labels,
                                datasets: [
                                  {
                                    data: response.porcentaje.data,
                                    backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#ffff00'],
                                  }
                                ]
                              }
                            $('#box-canvas-barra-2').html('');
                            let canvas2 = `<canvas id="box-barra2"
                            style="min-height: 250px; height: 250px; max-height: 300px; max-width: 100%; margin-top: 22px"></canvas>`;
                            $('#box-canvas-barra-2').html(canvas2);

                            var piePorcentaje = $('#box-barra2').get(0).getContext('2d')
                            var pieDataPorcentaje        = graficoPorcentaje;
                            var pieOptionsPorcentaje     = {
                            maintainAspectRatio : false,
                            responsive : true,
                            }

                            //Create pie or douhnut chart
                            // You can switch between pie and douhnut using the method below.
                            new Chart(piePorcentaje, {
                                type: 'pie',
                                data: pieDataPorcentaje,
                                options: pieOptionsPorcentaje
                            })
                        }else{
                          Swal.fire(
                            'Reportes',
                            'No se encuentra información disponible',
                            'warning'
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
            }
        });

        $('#venta-pdf').click(function(){
          let datos = $('#body-reporte-ventas tr');
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
              filename:     'Reporte de Ventas Mensuales.pdf',
              image:        { type: 'jpeg', quality: 3 },
              html2canvas:  { scale: 2 },
              jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
              };

              html2pdf().set(opt).from(element).save();
          }
      });
    }
});