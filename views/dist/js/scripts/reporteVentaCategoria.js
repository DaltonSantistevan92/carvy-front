$(function(){
    
    _init();

    function _init(){
        cargar_categorias()
        cargar_data();
    }

    function cargar_categorias(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'categoria/listar',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                //console.log(response);
                let inicio = '<option value=0>Seleccione una Categoría</option>';
                let aux = 0;

                if(response.length > 0){
                    response.forEach(element => {
                        aux += `<option value='${element.id}'>${element.categoria}</option>`;
                    });
                    inicio += aux;
                }
                inicio += '<option value="-1">Todos</option>';
                $('#date-venta-categoria').html(inicio);
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
        $('#venta-play').click(function(){
            let desde = $('#date-venta-inicio').val();
            let hasta = $('#date-venta-fin').val();
            let categoria = $('#date-venta-categoria option:selected').val(); 
            
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
            if(categoria == '0'){
                Swal.fire(
                    'Reportes',
                    'Seleccione una Categoría',
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
                        url : urlServidor + 'venta/categoria/' + desde + '/' + hasta + '/' + categoria,
                        // especifica si será una petición POST o GET
                        type : 'GET',
                        // el tipo de información que se espera de respuesta
                        dataType : 'json',
                        success : function(response) { 
                            console.log(response);
                            if(response.status){
                                let tr = '';
                                let i = 1;
                                response.data.forEach(element => {
                                    tr += `<tr>
                                        <td>${i}</td>
                                        <td>${element.producto.nombre}</td>
                                        <td>${element.cantidad}</td>
                                        <td>${element.precio_venta}</td>
                                        <td>${element.total}</td>
                                    </tr>`;
                                    i++;
                                });
                                $('#body-reporte-venta').html(tr);
                                $('#cantidad-general').text(response.cantidad_general);
                                $('#total-general').text(response.total_general);
                                $('#tabla-reporte').removeClass('d-none');
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
            let datos = $('#body-reporte-venta tr');
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
                filename:     'Reportes de Ventas Por Categoría.pdf',
                image:        { type: 'jpeg', quality: 3 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
                };

                html2pdf().set(opt).from(element).save();
            }
        });
    }
});