$(function(){
    
    _init();

    function _init(){
        cargar_categorias();
        cargar_data();
    }

    function cargar_categorias(){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'marca/todos',
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {
                console.log(response);
                let inicio = '<option value=0>Seleccione una Marca</option>';
                let aux = 0;

                if(response.status){
                    response.marca.forEach(element => {
                        aux += `<option value='${element.id}'>${element.nombre}</option>`;
                    });
                    inicio += aux;
                }
                $('#date-vehiculo-marca').html(inicio);
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
        $('#reparado-play').click(function(){
            let desde = $('#date-reparado-inicio').val();
            let hasta = $('#date-reparado-fin').val();
            let marca = $('#date-vehiculo-marca option:selected').val(); 
            
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
            if(marca == '0'){
                Swal.fire(
                    'Reportes',
                    'Seleccione una Marca',
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
                        url : urlServidor + 'vehiculo/reparados/' + desde + '/' + hasta + '/' + marca,
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
                                        <td>${element.orden}</td>
                                        <td>${element.placa}</td>
                                        <td>${element.color}</td>
                                        <td>${element.fecha}</td>
                                        <td>${element.mecanico}</td>
                                    </tr>`;
                                    i++;
                                });
                                $('#body-vehiculo-reparado').html(tr);
                                $('#tabla-reporte').removeClass('d-none');
                            }else{
                                Swal.fire(
                                    'Reportes',
                                    response.mensaje,
                                    'error'
                                );
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

            }

        });

        $('#reparado-pdf').click(function(){
            let datos = $('#body-vehiculo-reparado tr');
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
                filename:     'Reportes de Vehiculos Por Marca.pdf',
                image:        { type: 'jpeg', quality: 3 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
                };

                html2pdf().set(opt).from(element).save();
            }
        });
    }
});