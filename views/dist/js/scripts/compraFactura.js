$(function(){

    _init();

    function _init(){
        cargar_factura();
        imprimir_orden();
    }

    function cargar_factura(){
        let id_factura = localStorage.getItem('_id_factura');
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'compra/listar/' + id_factura,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                console.log(response);
                let tr = '';
                  if(response.status){
                      let compra_id = response.compra.id;
                      let numero_serie = response.compra.serie_documento;
                      let proveedor_compra = response.compra.proveedor.razon_social;
                      let compra_descuento = response.compra.descuento;
                      let compra_iva = response.compra.iva;
                      let compra_subtotal = response.compra.sub_total;
                      let compra_total = response.compra.total;
                      let compra_fecha = response.compra.fecha_compra;

                      $('#compra_id').text(compra_id);
                      $('#compra_numero_serie').text(numero_serie);
                      $('#compra_proveedor').text(proveedor_compra);
                      $('#compra_descuento').text((compra_descuento).toFixed(2));
                      $('#compra_iva').text((compra_iva).toFixed(2));
                      $('#compra_subtotal').text((compra_subtotal).toFixed(2));
                      $('#compra_total').text((compra_total).toFixed(2));
                      $('#compra_fecha').text(compra_fecha);

                    response.compra.detalle_compra.forEach((element, i) => {
                        tr += `<tr>
                        <td>${i+1} </td>
                        <td>${element.producto.nombre}</td>
                        <td>${element.cantidad}</td>
                        <td>${element.precio_compra}</td>
                        <td>${element.total}</td>
                    </tr>`;
                    });
                    $('#body_detalle_compra').html(tr);
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

    function imprimir_orden(){
        $('#btn-imprimir').click(function(){
            let element = document.getElementById('factura-compra');
            let opt = {
            margin:       1,
            filename:     'factura_compra.pdf',
            image:        { type: 'jpeg', quality: 1.5 },
            html2canvas:  { scale: 1 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            // New Promise-based usage:
            html2pdf().set(opt).from(element).save();
                    });
    }

});