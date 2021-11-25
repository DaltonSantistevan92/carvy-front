$(function(){

    _init();

    function _init(){
        $('#btn-borrar').hide();
        datos();
        cargar_proveedores();
        cargar_productos();
        buscar_proveedor();
        buscar_producto();
        buscar_codigo_producto();
        borrar_datos_producto();
        agregar_item();
        generar_descuento();
        guardar_compra();
        reset();
    }

    function datos(){
        let user = JSON.parse(localStorage.getItem('sesion'));
        let nombres = user.persona.nombres + ' ' + user.persona.apellidos;

        $('#compra-usuario-actual').val(nombres);
    }

    function cargar_proveedores(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'proveedor/listar',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                if(response.length > 0){
                    let tr = '';
                    let i = 1;
                    response.forEach(element => {
                        tr += `<tr id="item-prov-${element.id}">
                        <td>${i}</td>
                        <td style="display: none">${element.id}</td>
                        <td style="display: none">${element.ruc}</td>
                        <td style="display: none">${element.correo}</td>
                        <td style="display: none">${element.telefono}</td>
                        <td>${element.razon_social}</td>
                        <td>
                          <div class="div">
                            <button class="btn btn-danger btn-sm" data-dismiss="modal" onclick="seleccionar(${element.id})">
                              <i class="fas fa-check"></i>
                            </button>
                          </div>
                        </td>
                      </tr>`;
                      i++;
                    });
                    $('#proveedor-body').html(tr);
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

    function buscar_proveedor(){
        $('#buscar-prov').keyup(function(){
            let texto = $('#buscar-prov').val();

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'proveedor/search/'+ texto,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                   console.log(response);
                   if(response.status){
                       $('#proveedor-body').html('');
                        let tr = '';
                        let i = 1;
                        response.proveedores.forEach(element => {
                            tr += `<tr id="item-prov-${element.id}">
                            <td>${i}</td>
                            <td style="display: none">${element.id}</td>
                            <td style="display: none">${element.ruc}</td>
                            <td style="display: none">${element.correo}</td>
                            <td style="display: none">${element.telefono}</td>
                            <td>${element.razon_social}</td>
                            <td>
                            <div class="div">
                                <button class="btn btn-danger btn-sm" data-dismiss="modal" onclick="seleccionar(${element.id})">
                                <i class="fas fa-check"></i>
                                </button>
                            </div>
                            </td>
                        </tr>`;
                        i++;
                        });
                        $('#proveedor-body').html(tr);
                   }else{
                    $('#proveedor-body').html('');
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

    function borrar_datos_producto(){
        $('#btn-borrar').click(function(){
            aux_borrrar_datos();
        });
    }

    function aux_borrrar_datos(){
        $('#prod-id').val('');
        $('#prod-codigo').val('');
        $('#prod-stock').val('');
        $('#prod-nombre').val('');
        $('#pro-cantidad').val('');
        $('#prod-precio-compra').val('');
        $('#btn-borrar').hide();
    }

    function agregar_item(){
        $('#item-agregar').click(function(){
            let id = $('#prod-id').val();
            let nombre = $('#prod-nombre').val();
            let cantidad = $('#pro-cantidad').val();
            let precio_compra = $('#prod-precio-compra').val();
            let descuento = $('#compra-descuento-input').val();

            let total_producto = Number((parseInt(cantidad) * parseFloat(precio_compra)).toFixed(2));

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
           if(precio_compra.length == 0){
            Swal.fire(
                'Compra!',
                'Ingrese el precio unitario del producto',
                'info'
              )
           }else{
               let tr = `<tr id="fila-prod-${id}" class="fila-productos">
                   <td><i class="fas fa-star-of-life"></i></td>
                   <td>${nombre}</td>
                   <td>${cantidad}</td>
                   <td>${precio_compra}</td>
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

               let items = $('.total_producto');
               let total_global = 0;

               for(let i = 0; i < items.length; i++){
                    let aux  = parseFloat(items[i].innerText);
                    total_global += aux;
               }
               
               total_global = Number(total_global.toFixed(2));

               if(descuento.length != 0){
                   descuento = parseFloat(descuento);
                   
                   let iva_global = Number((total_global * 0.12).toFixed(2));
                   let total_general = Number((total_global +  iva_global).toFixed(2));
                   total_general -= descuento;
                   total_general = Number(total_general.toFixed(2));
                   
                   //Validar si el descuento es mayor que el subtotal
                   let total_parcial = total_global + iva_global;

                   if(descuento >= total_parcial){
                        Swal.fire(
                            'Compra!',
                            'El descuento no puede se mayor o igual a la compra',
                            'error'
                        );

                        $('#compra-descuento-input').val('0.00');
                        let new_des = parseFloat($('#compra-descuento-input').val());
                        let new_desc_form = Number(new_des.toFixed(2));

                        let items = $('.total_producto');
                        let _total_global = 0;

                        for(let i = 0; i < items.length; i++){
                            let aux  = parseFloat(items[i].innerText);
                            _total_global += aux;
                        }

                        let new_iva = _total_global * 0.12; 
                        let new_iva_format = Number(new_iva.toFixed(2));
                        let new_general = _total_global + new_iva_format;
                        let new_general_format = Number(new_general.toFixed(2));
                        
                        $('#compra-subtotal').text(_total_global);
                        $('#compra-iva').text(new_iva_format);
                        $('#compra-descuento').text(new_desc_form);
                        $('#compra-totalg').text(new_general_format);
                    }else{
                        
                        $('#compra-subtotal').text(total_global);
                        $('#compra-iva').text(iva_global);
                        $('#compra-descuento').text(descuento);
                        $('#compra-totalg').text(total_general);
                    }

               }else{

                   let iva_global = Number((total_global * 0.12).toFixed(2));
                   let total_general = total_global +  iva_global;
                   total_general = Number(total_general.toFixed(2));
    
                    $('#compra-subtotal').text(total_global);
                    $('#compra-iva').text(iva_global);
                    $('#compra-totalg').text(total_general);

                    console.log('sin descuento');
                    console.log(total_global);
                    console.log(iva_global);
                    console.log(total_general);
                }
                aux_borrrar_datos();
           }
        });
    }

    function generar_descuento(){
        $('#compra-descuento-input').blur(function(){
            let descuento = $('#compra-descuento-input').val();
            let total_global = parseFloat($('#compra-totalg').text());

            if(total_global > 0){
                if(total_global > 0){
                    let subtotal = parseFloat($('#compra-subtotal').text());

                    let iva = parseFloat($('#compra-iva').text());
                    let total_general = subtotal + iva - descuento;
                    total_general = Number(total_general.toFixed(2));
                    
                    let total_parcial = subtotal + iva;

                    if(descuento >= total_parcial){
                        Swal.fire(
                            'Compra!',
                            'El descuento no puede se mayor o igual a la compra',
                            'error'
                          );
                    }else{
                        $('#compra-totalg').text(total_general);
                        $('#compra-descuento').text(descuento);
                    }
                }
            }
        });
    }

    function guardar_compra(){
        $('#guardar-comprar').click(function(){
            
            let serie_documento = $('#compra-serie').val();
            let fecha_compra = $('#compra-fecha').val();
            let descuento = $('#compra-descuento-input').val();
            let usuario_id = JSON.parse(localStorage.getItem('sesion')).id;
            let proveedor_id = $('#prov-id').val();
            let sub_total = $('#compra-subtotal').text();
            let iva = $('#compra-iva').text();
            let total = $('#compra-totalg').text();

            let items = $('.total_producto');
            let productos = $('.fila-productos');

            if(serie_documento.length == 0){
                Swal.fire(
                    'Compra!',
                    'Ingrese un número de serie para la compra',
                    'error'
                  );
            }else
            if(proveedor_id.length == 0){
                Swal.fire(
                    'Compra!',
                    'Debe seleccionar un proveedor',
                    'error'
                  );
            }else
            if(items.length == 0){
                Swal.fire(
                    'Compra!',
                    'Debe agregar al menos un producto',
                    'error'
                  );
            }else{

                let detalles = [];
               for(let i = 0; i < productos.length; i++){

                   let producto_id = productos[i].children[6].innerText;
                   let cantidad = productos[i].children[2].innerText;
                   let precio_compra = productos[i].children[3].innerText;
                   let total = productos[i].children[4].innerText;

                   let aux = {
                        producto_id, cantidad, precio_compra, total
                   };
                   detalles.push(aux);
               }

               let json = {
                    compra: {
                        serie_documento,
                        fecha_compra,
                        descuento,
                        usuario_id,
                        proveedor_id,
                        sub_total,
                        iva,
                        total
                    },
                    detalle_compras: detalles
                };

                ajax_guardar(json);
            }
        });
    }

    function ajax_guardar(json){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'compra/save',
            // especifica si será una petición POST o GET
            type : 'POST',

            data : "data=" + JSON.stringify(json),
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                console.log(response);
                if(response.status){
                    Swal.fire(
                        'Compra!',
                        response.mensaje,
                        'success'
                    );
                    reset();
                }else{
                    Swal.fire({
                        title: 'Error!',
                        text: response.mensaje,
                        icon: 'error',
                        confirmButtonText: 'Ok'
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

    function reset(){
        $('#compra-id').val('');
        $('#compra-serie').val('');
        $('#compra-descuento-input').val('0.00');
        $('#prov-id').val('');
        $('#prov-ruc').val('');
        $('#prov-razon-social').val('');
        $('#prov-correo').val('');
        $('#prov-telefono').val('');
        $('#prod-id').val('');
        $('#prod-codigo').val('');
        $('#prod-nombre').val('');
        $('#prod-stock').val('');
        $('#pro-cantidad').val('');
        $('#prod-precio-compra').val('');
        $('#compra-subtotal').text('0');
        $('#compra-iva').text('0');
        $('#compra-descuento').text('0');
        $('#compra-totalg').text('0');
        $('#items-productos').html('');
    }
});

function seleccionar(id){
    let fila = '#item-prov-'+id;
    let f = $(fila)[0].children;

    let ruc = f[2].innerText;
    let correo = f[3].innerText;
    let telefono = f[4].innerText;
    let razon_social = f[5].innerText;
    
    $('#prov-id').val(id);
    $('#prov-ruc').val(ruc);
    $('#prov-razon-social').val(razon_social);
    $('#prov-correo').val(correo);
    $('#prov-telefono').val(telefono);
}

function seleccionar_producto(id){
    let fila = '#item-prod-'+id;
    let f = $(fila)[0].children;

    let codigo = f[2].innerText;
    let nombre = f[3].innerText;
    let stock = f[4].innerText;
    
    $('#prod-id').val(id);
    $('#prod-codigo').val(codigo);
    $('#prod-nombre').val(nombre);
    $('#prod-stock').val(stock);
    $('#btn-borrar').show();
}

function borrar_item(id,total_producto){
    let tr = '#fila-prod-'+id;
    $(tr).remove();
    
    let items = $('.total_producto');
    let total_global = 0;

    for(let i = 0; i < items.length; i++){
         let aux  = parseFloat(items[i].innerText);
         total_global += aux;
    }
    
    total_global = Number(total_global.toFixed(2));
    let descuento = $('#compra-descuento-input').val();
    let iva_global = Number((total_global * 0.12).toFixed(2));
    let total_general = total_global +  iva_global;
    
    if(descuento.length > 0){
        $('#compra-descuento').text(descuento);
        total_general -= descuento;

        $('#compra-subtotal').text(total_global.toFixed(2));
        $('#compra-iva').text(iva_global.toFixed(2));
    }else{
        
        $('#compra-subtotal').text(total_global.toFixed(2));
        $('#compra-iva').text(iva_global.toFixed(2));
        
    }
    total_general = Number(total_general.toFixed(2));
    $('#compra-totalg').text(total_general);

    if(items.length == 0){
        $('#compra-totalg').text('0');
        $('#compra-descuento').text('0');
    }

    
}