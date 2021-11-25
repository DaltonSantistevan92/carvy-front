$(function(){

    _init();

    function _init(){
        $('#btn-borrar').hide();  
        buscar_producto();
        buscar_codigo_producto();
        agregar_item();
        get_orden();
        reset();
        guardar();
        abrirModalProductos();
    }
    
    function cargar_productos(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'producto/listar',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                if(response.length > 0){
                    let tr = '';
                    let i = 1;
                    response.forEach(element => {
                        tr += `<tr id="item-prod-${element.id}">
                        <td>${i}</td>
                        <td style="display: none">${element.id}</td>
                        <td>${element.codigo}</td>
                        <td>${element.nombre}</td>
                        <td>${element.stock}</td>
                        <td style="display: none">${element.precio_venta}</td>
                        <td>
                          <div class="div">
                            <button class="btn btn-danger btn-sm" data-dismiss="modal" onclick="seleccionar_producto(${element.id})">
                              <i class="fas fa-check"></i>
                            </button>
                          </div>
                        </td>
                      </tr>`;
                      i++;
                    });
                    $('#producto-body').html(tr);
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

    function abrirModalProductos(){
        $('#btn-modal-search-products').click(() => {
            $('#modal-producto').modal('show');
            cargar_productos();
        });
    }

    function buscar_producto(){
        $('#buscar-prod').keyup(function(){
            let texto = $('#buscar-prod').val();

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'producto/search/'+ texto,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                   if(response.status){
                    let tr = '';
                    let i = 1;
                    response.productos.forEach(element => {
                        tr += `<tr id="item-prod-${element.id}">
                        <td>${i}</td>
                        <td style="display: none">${element.id}</td>
                        <td>${element.codigo}</td>
                        <td>${element.nombre}</td>
                        <td>${element.stock}</td>
                        <td style="display: none">${element.precio_venta}</td>
                        <td>
                          <div class="div">
                            <button class="btn btn-danger btn-sm" data-dismiss="modal" onclick="seleccionar_producto(${element.id})">
                              <i class="fas fa-check"></i>
                            </button>
                          </div>
                        </td>
                        <td class="d-none">${element.precio_venta}</td>
                    
                      </tr>`;
                      i++;
                    });
                    $('#producto-body').html(tr);
                   }else{
                    $('#producto-body').html('');
                   }
                },
                error : function(jqXHR, status, error) {
                    console.log('Disculpe, existió un problema');
                },
                complete : function(jqXHR, status) {
                    // console.log('Petición realizada');
                }
            });
        });
    }

    function buscar_codigo_producto(){
        //tabs
        $('#prod-codigo').blur(function(){
            let codigo = $('#prod-codigo').val();
           peticion(codigo);
        });
        //enter
        $('#prod-codigo').keypress(function(e){
            let code = (e.keyCode ? e.keyCode : e.which);
            if(code===13){
                let codigo = $('#prod-codigo').val();
                peticion(codigo);
            }
        });

        function peticion(codigo){
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'producto/search/' + codigo,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        let producto = response.productos[0];
                        $('#prod-id').val(producto.id);
                        $('#prod-stock').val(producto.stock);
                        $('#prod-nombre').val(producto.nombre);
                        $('#btn-borrar').show();
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

    function agregar_item(){
        $('#item-agregar').click(function(){
            let id = $('#prod-id').val();
            let nombre = $('#prod-nombre').val();
            let cantidad = $('#pro-cantidad').val();
            let precio_venta = $('#prod-precio-venta').val();
            let stock = parseInt($('#pro-stock').val());

            let total_producto = Number((parseInt(cantidad) * parseFloat(precio_venta)).toFixed(2));

           if(id.length == 0){
            Swal.fire(
                'Compra!',
                'Seleccione un producto',
                'info'
              )
           }else
            if(cantidad.length == 0){
            Swal.fire(
                'Compra!',
                'Ingrese una cantidad para el producto',
                'info'
              )
           }else
           if(precio_venta.length == 0){
            Swal.fire(
                'Compra!',
                'Ingrese el precio de venta del producto',
                'info'
              )
           }else{
            if(parseInt(cantidad) > stock){
                Swal.fire(
                    'Venta',
                    'La cantidad ingresada excede al stock actual',
                    'warning'
                  )
            }else{
                let tr = `<tr id="fila-prod-${id}" class="fila-productos">
                <td><i class="fas fa-star-of-life"></i></td>
                <td>${nombre}</td>
                <td>${cantidad}</td>
                <td>${precio_venta}</td>
                <td class="total_producto">${total_producto}</td>
                <th>
                    <div>
                        <button class="btn btn-outline-danger" onclick="borrar_item(${id},${total_producto})">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </th>
                <th style="display:none;">${id}</th>
            </tr>`;

            $('#items-productos').append(tr);
            reset();
            }

               
           }
        });
    }
    
    function get_orden(){
        let id = localStorage.getItem('orden_id');
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'orden/listar/' + id,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
               if(response.status){
                   $('#orden-id').text(response.orden.id);
                   $('#orden-codigo').text(response.orden.codigo);
                   $('#orden-creado').text(response.orden.fecha);
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

    function reset(){
        $('#prod-id').val('');
        $('#prod-codigo').val('');
        $('#prod-nombre').val('');
        $('#pro-cantidad').val('');
        $('#prod-precio-venta').val('');
        $('#pro-stock').val('');
    }

    function guardar(){
        $('#guardar_repuesto_orden').click(function(){
            let body = $('#items-productos tr');
            let orden = $('#orden-id').text();
            let array = [];
            if(body.length > 0){
                for(let i=0; i< body.length; i++){
                    let td = body[i].children;
                    let id = td[6].innerText;
                    let cantidad = td[2].innerText;

                    let object = {
                        orden_id: orden,
                        producto_id: id,
                        comprado: 'N',
                        cantidad: cantidad
                    }
                    array.push(object);
                }
                let json = {
                    material: array
                }

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'material/save',
                    // especifica si será una petición POST o GET
                    type : 'POST',
                    data: 'data=' + JSON.stringify(json),
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) {
                    
                      if(response.status){
                        $('#items-productos').html('');

                        Swal.fire({
                            title: 'Orden de Trabajo',
                            text: response.mensaje,
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        });
                      }
                    },
                    error : function(jqXHR, status, error) {
                        console.log('Disculpe, existió un problema');
                    },
                    complete : function(jqXHR, status) {
                        // console.log('Petición realizada');
                    }
                }); 
            }else{
                Swal.fire(
                    'Orden de Trabajo',
                    'No ha agregado ningún repuesto a la orden',
                    'error'
                  )
            }
        });
    }

});

function seleccionar_producto(id){
    let fila = '#item-prod-'+id;
    let f = $(fila)[0].children;
    console.log(f);

    let codigo = f[2].innerText;
    let nombre = f[3].innerText;
    let stock = f[4].innerText;
    let precio = f[5].innerText;
    
    $('#prod-id').val(id);
    $('#prod-codigo').val(codigo);
    $('#prod-nombre').val(nombre);
    $('#prod-precio-venta').val(precio);
    $('#pro-stock').val(stock);
    $('#btn-borrar').show();
}

function borrar_item(id,total_producto){
    let tr = '#fila-prod-'+id;
    $(tr).remove();
}
