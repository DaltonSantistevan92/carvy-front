$(function(){

    _init();

    function _init(){
        cargar_datos();
        iniciar_grafico();
        cargar_tabla();
    }

    function cargar_datos(){
        contar_proveedor();

        function contar_proveedor(){
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'proveedor/contar',
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        $('#conta_proveedor').text(response.cantidad);
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

        contar_categoria()

        function contar_categoria(){
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'categoria/contar',
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        $('#conta_categoria').text(response.cantidad);
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

        contar_productos()
        
        function contar_productos(){
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'producto/contar',
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        $('#conta_producto').text(response.cantidad);
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

        total_compra()

        function total_compra(){
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'compra/total',
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        $('#total_compra').text('$' + response.total);
                    }    
                    $('#mes_compra').text('Compras ('+ response.mes +')')  ;
                },
                error : function(jqXHR, status, error) {
                    console.log('Disculpe, existió un problema');
                },
                complete : function(jqXHR, status) {
                    // console.log('Petición realizada');
                }
            });
        }

        contar_usuario();

        function contar_usuario(){
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'usuario/contar',
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        $('#conta_usuario').text(response.cantidad);
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

        contar_vehiculo();

        function contar_vehiculo(){
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'vehiculo/contar',
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        $('#conta_vehiculo').text(response.cantidad);
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

        total_venta()

        function total_venta(){
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'venta/total',
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        $('#total_venta').text('$' + response.total);
                    }    
                    $('#mes_venta').text('Ventas ('+ response.mes +')')  ;
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

    function iniciar_grafico(){
        stock_productos();

        function stock_productos(){
              let f1 = new Morris.Bar({
                element: 'stock-productos',
                data: [
                  { x: 'Producto', valor: 100 },
                  { x: 'Producto', valor: 75 },
                  { x: 'Producto', valor: 50 },
                  { x: 'Producto', valor: 75 },
                  { x: 'Producto', valor: 50 },
                  { x: 'Producto', valor: 75 },
                  { x: 'Producto', valor: 100 }
                ],
                xkey: 'x',
                ykeys: ['valor'],
                labels: ['Stock'],
                resize: true,
                barColors : ['#ff6565','#ff9c9c','#eb9cff','#edb8fa','#fadc9b','#77dd77']
              });
              $.ajax({
                // la URL para la petición
                url : urlServidor + 'producto/grafica_stock',
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        f1.setData(response.data);
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

        reporte_compras();

        function reporte_compras(){
              $.ajax({
                // la URL para la petición
                url : urlServidor + 'compra/grafica_general',
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    Morris.Bar({
                        element: 'compras-reporte',
                        data: response,
                        xkey: 'x',
                        ykeys: ['compras','ventas'],
                        labels: ['Compras','Ventas'],
                        resize: true,
                        barColors : ['#84b6f4','#00a65a']
                      });
                },
                error : function(jqXHR, status, error) {
                    console.log('Disculpe, existió un problema');
                },
                complete : function(jqXHR, status) {
                    // console.log('Petición realizada');
                }
            });
        }

        categoria_prductos();

        function categoria_prductos(){   
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'categoria/grafica_porcentaje',
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                   if(response){
                    // donutData.labels = response.datos.labels;
                    // donutData.datasets.data = response.datos.porentaje;

                    let donutData        = {
                        labels: response.datos.labels,
                        datasets: [
                          {
                            data: response.datos.data,
                            backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de', '#ffff00'],
                          }
                        ]
                      }
        
                        var pieChartCanvas = $('#categoria_productos').get(0).getContext('2d')
                        var pieData        = donutData;
                        var pieOptions     = {
                        maintainAspectRatio : false,
                        responsive : true,
                        }
                        //Create pie or douhnut chart
                        // You can switch between pie and douhnut using the method below.
                        new Chart(pieChartCanvas, {
                            type: 'pie',
                            data: pieData,
                            options: pieOptions
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

                        if(element.total == 0){
                            color = 'danger';
                        }else
                        if(element.total > 0 && element.total <= 99){
                            color = 'warning';
                        }else{
                            color = 'success';
                        }

                        tr += `   <tr>
                        <td>${i+1}</td>
                        <td>${element.orden.codigo}</td>
                        <td>${element.orden.estado_orden.detalle}</td>
                        <td>
                            <div class="progress progress-xs">
                                <div class="progress-bar bg-${color}" style="width: ${element.total}%"></div>
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