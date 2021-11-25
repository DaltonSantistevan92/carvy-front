/* $(function(){ */
    var array_producto = [];

    _init();

    function _init(){
        $('#btn-borrar').hide();
        check_orden();
        cargar_clientes();
        buscar_cliente();
        modal_orden_cliente();
        datos();
        cargar_vehiculo();
        cargar_productos();
        buscar_producto();
        agregar_item();
        reset_producto();
        actualizar_descuento();
        guardar_venta();
        reset();
    }

    function datos(){
        let user = JSON.parse(localStorage.getItem('sesion'));
        let nombres = user.persona.nombres + ' ' + user.persona.apellidos;

        $('#venta-usuario-actual').val(nombres);
    }

    function check_orden(){
        $('#check-orden').change(function(){
            if($('#check-orden').prop('checked')){
                $('#btn-orden').removeClass('d-none');
                $('#buscar-cliente-venta').addClass('d-none');
            }else{
                $('#btn-orden').addClass('d-none');
                $('#buscar-cliente-venta').removeClass('d-none');
            }
        });    
    }

    function cargar_clientes(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'cliente/listar',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                if(response.length > 0){
                    let tr = '';
                    let i = 1;
                    response.forEach(element => {
                        tr += `<tr id="fila-cliente-${element.cliente.id}">
                            <td>${i}</td>
                            <td style="display: none">${element.cliente.id}</td>
                            <td>${element.cliente.persona.cedula}</td>
                            <td>${element.cliente.persona.nombres}</td>
                            <td>${element.cliente.persona.apellidos}</td>
                            <th style="display: none">${element.cliente.persona.telefono}</th>
                            <th style="display: none">${element.cliente.persona.correo}</th>
                            <th style="display: none">${element.cliente.persona.direccion}</th>
                            <td>
                                <div class="div">
                                    <button data-dismiss="modal" class="btn btn-danger btn-sm" onclick="seleccionar_cliente(${element.cliente.id})">
                                        <i class="fas fa-check"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
                      i++;
                    });
                    $('#cliente-body').html(tr);
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

    function buscar_cliente(){
        $('#buscar-cli').keyup(function(){
            let texto = $('#buscar-cli').val();
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'cliente/search/' + texto,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    console.log(response);
                    if(response.status){
                        let tr = '';
                        let i = 1;
                        response.clientes.forEach(element => {
                            tr += `<tr id="fila-cliente-${element.id}">
                                <td>${i}</td>
                                <td style="display: none">${element.id}</td>
                                <td>${element.cedula}</td>
                                <td>${element.nombres}</td>
                                <td>${element.apellidos}</td>
                                <th style="display: none">${element.telefono}</th>
                                <th style="display: none">${element.correo}</th>
                                <td>
                                    <div class="div">
                                        <button class="btn btn-danger btn-sm" onclick="seleccionar_cliente(${element.id})">
                                            <i class="fas fa-check"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>`;
                          i++;
                        });
                        $('#cliente-body').html(tr);
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

    function modal_orden_cliente(){
        $('#btn-orden').click(function(){
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'orden/cliente',
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                   let tr = '';
                   let i = 1;
                   if(response.status){
                    response.atendidas.forEach(element => {
                        tr += `<tr id="fila-orden-${element.orden.id}">
                        <td>${i}</td>
                        <td style="display: none">${element.orden.id}</td>
                        <td>${element.orden.codigo}</td>
                        <td>${element.orden.cliente.persona.nombres + ' ' + element.orden.cliente.persona.apellidos}</td>
                        <td>${element.orden.vehiculo.placa}</td>
                        <td>
                            <div class="div">
                                <button data-dismiss="modal" class="btn btn-danger btn-sm" onclick="seleccionar_orden(${element.orden.id})">
                                    <i class="fas fa-check"></i>
                                </button>
                            </div>
                        </td>
                        <td style="display: none">${element.orden.cliente.persona.nombres}</td>
                        <td style="display: none">${element.orden.cliente.persona.apellidos}</td>
                        <td style="display: none">${element.orden.cliente.persona.direccion}</td>
                        <td style="display: none">${element.orden.cliente.persona.telefono}</td>
                        <td style="display: none">${element.orden.vehiculo.marca.nombre}</td>
                        <td style="display: none">${element.orden.vehiculo.modelo}</td>
                        <td style="display: none">${element.orden.vehiculo.color}</td>

                    </tr>`;
                    i++;
                    });
                    $('#orden-body').html(tr);
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

    function cargar_vehiculo(){
        $('#select-vehiculo-venta').change(function(){
            let id =  $('#select-vehiculo-venta option:selected').val();
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'vehiculo/buscar/'+id,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    console.log(response);
                    if(response.status){
                        let marca = response.vehiculo.marca.nombre;
                        let modelo = response.vehiculo.modelo;
                        let color = response.vehiculo.color;
                        let id = response.vehiculo.id;

                        $('#vehiculo-oculto').val(id);
                        $('#venta-vehiculo-marca').val(marca);
                        $('#venta-vehiculo-modelo').val(modelo);
                        $('#venta-vehiculo-color').val(color);
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
                            <button class="btn btn-danger btn-sm" onclick="seleccionar_producto(${element.id})">
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
            let precio_venta = $('#prod-precio-venta').val();
            let descuento = $('#compra-descuento-input').val();
            let stock = parseInt($('#prod-stock').val());

            let total_producto = Number((parseInt(cantidad) * parseFloat(precio_venta)).toFixed(2));

           if(id.length == 0){
            Swal.fire(
                'Venta!',
                'Seleccione un producto',
                'info'
              )
           }else
            if(cantidad.length == 0){
            Swal.fire(
                'Venta!',
                'Ingrese una cantidad para el producto',
                'info'
              )
           }else
           if(parseInt(cantidad) > stock){
            Swal.fire(
                'Venta',
                'La cantidad excede al stock actual',
                'warning'
              )
           }
           else
           {
               
                    let existe = array_producto.find( dato => dato == id);
                    
                    if(existe){
                        Swal.fire(
                            'Venta',
                            'El producto ya se encuentra en la lista',
                            'warning'
                          )
                    }else{
                        array_producto.push(id);
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
                               <td style="display:none;">N</td>
                               <td style="display:none;">0</td>
                               <th style="display:none;">${id}</th>
                           </tr>`;
                
                           $('#items-productos').append(tr);
                            reset_producto();
                            actualizar_card();
                    }
                }   
            
        });
    }

    function reset_producto(){
        $('#prod-id').val('');
        $('#prod-codigo').val('');
        $('#prod-nombre').val('');
        $('#pro-cantidad').val('');
        $('#prod-stock').val('');
        $('#prod-precio-venta').val('');
    }

    function actualizar_descuento(){
        $('#venta-descuento-input').blur(function(e){
            let descuento_input = $('#venta-descuento-input').val();
            let subtotal = $('#venta-subtotal').text();

            let descuento = 0;
            let total = 0;

            if(parseFloat(descuento) > parseFloat(subtotal)){
                Swal.fire(
                    'Venta',
                    'El descuento no puede ser mayor al subtotal',
                    'error'
                  )
                  $('#venta-descuento-input').val('0');
            }else{
                let iva = Number(parseFloat(subtotal).toFixed(2)) * 0.12;
                descuento = descuento_input;

                if(descuento > 0){
                    total = subtotal - descuento + iva;
                }else{
                    total = Number(subtotal) + Number(iva.toFixed(2));
                }

                $('#venta-subtotal').text(parseFloat(subtotal).toFixed(2));
                $('#venta-iva').text(iva.toFixed(2));
                $('#venta-descuento').text(descuento);
                $('#venta-totalg').text(total.toFixed(2));
            }
          
        });
    }

    function guardar_venta(){
        $('#guardar-venta').click(function(){
            let serie= $('#venta-serie').val();
            let fecha_venta = $('#venta-fecha').val();
            let descuento_efectivo = $('#venta-descuento-input').val();
            let usuario_id = JSON.parse(localStorage.getItem('sesion')).id;
            let empresa_id = 1;
            let cliente_id = $('#venta-cliente-id').val();
            let subtotal = $('#venta-subtotal').text();
            let iva = $('#venta-iva').text();
            let total = $('#venta-totalg').text();

            let object = array_producto();
            //console.log(object);

            let json = {
                venta: {
                    serie,
                    fecha_venta,
                    descuento_efectivo,
                    usuario_id,
                    empresa_id,
                    cliente_id,
                    subtotal,
                    iva,
                    total
                },
                servicio : object.servicios, detalles: object.detalles
            };

            if(serie.length == 0){
                Swal.fire(
                    'Venta!',
                    'Ingrese numero de serie!',
                    'info'
                  )
            }else{

                ajax_guardar(json);
            }
            //console.log(json);
        });

        function array_producto(){      
            let tr = $('#items-productos tr');
    
            let detalles = [];
            let servicios = { orden_id: '0'};
            let json = {};

            for(let i = 0; i < tr.length; i++){
                let hijos = tr[i].children;
                console.log(hijos);

                let cantidad = hijos[2].innerText;
                let precio_venta = hijos[3].innerText;
                let total = hijos[4].innerText;
                let producto_id = hijos[8].innerText;
                let es_orden = hijos[6].innerText;
                let orden_id = hijos[7].innerText;

                if(orden_id == '0'){
                    let object = {cantidad, precio_venta, total, producto_id, es_orden};
                    detalles.push(object);
                }else{

                    servicios.orden_id = orden_id;
                }

                json = {
                    servicios, detalles
                }

            }
            return json;
        }
    }

    function ajax_guardar(json){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'venta/save',
            // especifica si será una petición POST o GET
            type : 'POST',

            data : "data=" + JSON.stringify(json),
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                console.log(response);
                if(response.status){
                    Swal.fire(
                        'Venta!',
                        response.mensaje,
                        'success'
                    );
                    actualizar_card();
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
        $('#venta-id').val('');
        $('#venta-serie').val('');
        $('#venta-descuento-input').val('0.00');
        $('#venta-cliente-id').val('');
        $('#venta-cliente-nombre').val('');
        $('#venta-cliente-apellido').val('');
        $('#venta-cliente-direccion').val('');
        $('#venta-cliente-telefono').val('');
        $('#vehiculo-oculto').val('');
        $('#venta-vehiculo-marca').val('');
        $('#venta-vehiculo-marca').val('');
        $('#venta-vehiculo-color').val('');
        $('#prod-id').val('');
        $('#prod-codigo').val('');
        $('#prod-nombre').val('');
        $('#prod-stock').val('');
        $('#pro-cantidad').val('');
        $('#prod-precio-venta').val('');
        $('#venta-subtotal').text('0');
        $('#venta-iva').text('0');
        $('#venta-descuento').text('0');
        $('#venta-totalg').text('0');
        $('#items-productos').html('');
    }
/* }); */

function seleccionar_cliente(id){
    let fila = '#fila-cliente-'+id;
    let f = $(fila)[0].children;
    
    let nombres = f[3].innerText;
    let apellidos = f[4].innerText;
    let telefono = f[5].innerText;
    let direccion = f[7].innerText;

    $('#venta-cliente-id').val(id);
    $('#venta-cliente-nombre').val(nombres);
    $('#venta-cliente-apellido').val(apellidos);
    $('#venta-cliente-telefono').val(telefono);
    $('#venta-cliente-direccion').val(direccion);

    $.ajax({
        // la URL para la petición
        url : urlServidor + 'vehiculo/search/'+id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                let option = '<option value=0>Seleccione una Opción</option>';
                if(response.vehiculos.length > 0){
                    response.vehiculos.forEach(element =>{
                        option += `<option value=${element.vehiculo_id}>${element.placa}</option>`;
                    });
                    $('#select-vehiculo-venta').removeAttr('disabled');
                    $('#vehiculo-oculto').val('');
                }else{
                    $('#select-vehiculo-venta').attr('disabled','disabled');
                    $('#vehiculo-oculto').val('999');
                }
                //console.log(option);
                $('#select-vehiculo-venta').html(option);
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: 'El cliente no tiene vehículos',
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

function seleccionar_producto(id){
    let fila = '#item-prod-'+id;
    let f = $(fila)[0].children;

    let codigo = f[2].innerText;
    let nombre = f[3].innerText;
    let stock = f[4].innerText;
    let precio_venta = f[5].innerText;
    
    if(parseInt(stock) > 0){
        $('#prod-id').val(id);
        $('#prod-codigo').val(codigo);
        $('#prod-nombre').val(nombre);
        $('#prod-stock').val(stock);
        $('#prod-precio-venta').val(precio_venta)
        $('#btn-borrar').show();
        $('#modal-producto-venta').modal('hide');
    }else{
        Swal.fire(
            'Venta',
            'No hay productos en Stock',
            'warning'
          )
    }
}

function borrar_item(id,total_producto){
    let tr = '#fila-prod-'+id;
    $(tr).remove();

    let pos = array_producto.indexOf(id);

    array_producto.splice(pos,1);

    actualizar_card();
}

function actualizar_card(){
    let tr = $('#items-productos tr');
    let descuento_input = parseFloat($('#venta-descuento-input').val());

    let subtotal = 0;
    let descuento = 0;
    let total = 0;

    for (let i = 0; i < tr.length; i++) {
        let hijos = tr[i].children;
        subtotal += parseFloat(hijos[4].innerText); 
    }

    let iva = Number(subtotal.toFixed(2)) * 0.12;
    descuento = descuento_input;
    
    if(descuento > 0){
        total = subtotal - descuento + iva;
    }else{
        total = Number(subtotal) + Number(iva.toFixed(2));
    }

    $('#venta-subtotal').text(subtotal.toFixed(2));
    $('#venta-iva').text(iva.toFixed(2));
    $('#venta-descuento').text(descuento);
    $('#venta-totalg').text(total.toFixed(2));
}

function seleccionar_orden(id){
    let fila = '#fila-orden-'+id;
    let f = $(fila)[0].children;

    let nombres = f[6].innerText;
    let apellidos = f[7].innerText;
    let direccion = f[8].innerText;
    let telefono = f[9].innerText;
    let marca = f[10].innerText;
    let modelo = f[11].innerText;
    let color = f[12].innerText;

    $('#venta-cliente-nombre').val(nombres);
    $('#venta-cliente-apellido').val(apellidos);
    $('#venta-cliente-telefono').val(telefono);
    $('#venta-cliente-direccion').val(direccion);

    $('#venta-vehiculo-marca').val(marca);
    $('#venta-vehiculo-modelo').val(modelo);
    $('#venta-vehiculo-color').val(color);

    $.ajax({
        // la URL para la petición
        url : urlServidor + 'orden/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            $('#venta-cliente-id').val(response.orden.cliente.id);
           let tr = `<tr id="fila-prod-" class="fila-productos">
                <td><i class="fas fa-star-of-life"></i></td>
                <td>Orden ${response.orden.codigo}</td>
                <td>1</td>
                <td>${response.orden.suma}</td>
                <td class="total_producto">${response.orden.suma}</td>
                <th>
                    <div>
                        <button class="btn btn-outline-danger" disabled>
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </th>
                <td style="display:none;">S</td>
                <td style="display:none;">${response.orden.id}</td>
                <th style="display:none;"></th>
            </tr>
           `;

           response.orden.material.forEach(element => {
                let total_producto = Number((parseInt(element.cantidad) * parseFloat(element.producto.precio_venta)).toFixed(2));
                tr += `<tr id="fila-prod-${element.producto.id}" class="fila-productos">
                <td><i class="fas fa-star-of-life"></i></td>
                <td>${element.producto.nombre}</td>
                <td>${element.cantidad}</td>
                <td>${element.producto.precio_venta}</td>
                <td class="total_producto">${total_producto}</td>
                <th>
                    <div>
                        <button class="btn btn-outline-danger" disabled>
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </th>
                <td style="display:none;">S</td>
                <td style="display:none;">0</td>
                <th style="display:none;">${element.producto.id}</th>
            </tr>`;
            $('#items-productos').html(tr);
            Swal.fire(
                'Venta!',
                'Los datos de la Orden han sido cargados',
                'info'
              )
           });
           actualizar_card();
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    }); 
}

