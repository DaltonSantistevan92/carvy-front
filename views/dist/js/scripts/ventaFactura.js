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
            url : urlServidor + 'venta/listar/' + id_factura,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                console.log(response);
                let tr = '';
                let tr2 = '';
                  if(response.status){
                      let compra_id = response.venta.id;
                      let numero_serie = response.venta.serie;
                      let proveedor_compra = response.venta.cliente.persona.nombres + ' ' + response.venta.cliente.persona.apellidos;
                      let compra_descuento = response.venta.descuento_efectivo;
                      let compra_iva = response.venta.iva;
                      let compra_subtotal = response.venta.subtotal;
                      let compra_total = response.venta.total;
                      let compra_fecha = response.venta.fecha_venta;

                      $('#compra_id').text(compra_id);
                      $('#compra_numero_serie').text(numero_serie);
                      $('#compra_proveedor').text(proveedor_compra);
                      $('#compra_descuento').text((compra_descuento).toFixed(2));
                      $('#compra_iva').text((compra_iva).toFixed(2));
                      $('#compra_subtotal').text((compra_subtotal).toFixed(2));
                      $('#compra_total').text((compra_total).toFixed(2));
                      $('#compra_fecha').text(compra_fecha);

                      let i = 0;
                    response.venta.detalle_venta.forEach((element, i) => {
                        tr += `<tr>
                        <td>${i+1} </td>
                        <td>${element.producto.nombre}</td>
                        <td>${element.cantidad}</td>
                        <td>${element.precio_venta}</td>
                        <td>${element.total}</td>
                    </tr>`;
                    });

                    if(response.orden){
                        tr += `<tr>
                        <td>${i+1} </td>
                        <td>Orden ${response.orden.codigo}</td>
                        <td>1</td>
                        <td>${response.orden.suma}</td>
                        <td>${response.orden.suma}</td>
                    </tr>`;
                    }
                    $('#body_detalle_venta').html(tr+tr2);
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
            let element = document.getElementById('factura-venta');
            let opt = {
            margin:       1,
            filename:     'factura_venta.pdf',
            image:        { type: 'jpeg', quality: 1.5 },
            html2canvas:  { scale: 1 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            // New Promise-based usage:
            html2pdf().set(opt).from(element).save();
                    });
    }

});