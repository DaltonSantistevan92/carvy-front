$(function(){

    _init();

    function _init(){
        cargar_datos();
        iniciar_grafico();
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
                url : urlServidor + 'compra/grafica_compra',
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    Morris.Bar({
                        element: 'compras-reporte',
                        data: response,
                        xkey: 'x',
                        ykeys: ['compras'],
                        labels: ['Total'],
                        resize: true,
                        barColors : ['#84b6f4']
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
    }
});