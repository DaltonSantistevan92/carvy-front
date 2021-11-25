$(function(){

    _init();

    function _init(){
        cargar_categorias();
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
                $('#select-categoria').html(inicio);
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
        $('#repuesto-play').click(function(){

            let categoria = $('#select-categoria option:selected').val();
            let limite = $('#date-repuesto-limite option:selected').val();
            
            if(categoria == '0'){
                Swal.fire(
                    'Reportes',
                    'Seleccione una Categoría',
                    'warning'
                  )
            }else
            if(limite == '0'){
                Swal.fire(
                    'Reportes',
                    'Seleccione un Límite',
                    'warning'
                  )
            }
            else{
                let f = new Date();
                let fecha = f.getDate() + '/' + (f.getMonth()+1) + '/' + f.getFullYear();
                let hora = f.getHours() + ':' + f.getMinutes() + ':' + f.getSeconds();
                $('#fecha-consulta').text(fecha);
                $('#hora-consulta').text(hora);
                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'producto/agotarse/' + categoria + '/' + limite,
                    // especifica si será una petición POST o GET
                    type : 'GET',
                    // el tipo de información que se espera de respuesta
                    dataType : 'json',
                    success : function(response) { 
                        console.log(response);
                        if(response.length > 0){
                            let tr = '';
                            let i = 1;
                            response.forEach(element => {
                                tr += `<tr>
                                    <td>${i}</td>
                                    <td style="display: block; text-align: start">${element.nombre}</td>
                                    <td>${element.stock}</td>
                                    <td>${element.stock_minimo}</td>
                                    <td>${element.precio_venta}</td>
                                    <td>${element.precio_compra}</td>
                                </tr>`; 
                                i++;
                            });
                            $('#body-agotarse').html(tr);
                            $('#tabla-reporte').removeClass('d-none');
                        }else{
                            Swal.fire(
                                'Reportes',
                                'No hay información disponible',
                                'error'
                              )
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

        });

        $('#repuesto-pdf').click(function(){
            let datos = $('#body-agotarse tr');
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
                filename:     'Reportes de Repuestos Por Agotarse.pdf',
                image:        { type: 'jpeg', quality: 3 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
                };

                html2pdf().set(opt).from(element).save();
            }
        });
    }

});