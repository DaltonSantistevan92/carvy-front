$(function(){

    var valor;

    _init();

    function _init(){
        validarFormulario();
        guardarCliente();
        changeCedula();
        no_validar();
    }

    function validarFormulario(){
        $('#form-nuevo-cliente').validate({
            rules:{
                cedula: {
                    required: true
                },
                nombres : {
                    required: true,
                    minlength: 4
                },
                apellidos:{
                    required: true,
                    minlength: 3
                },
                correo: {
                    required: true,
                    email: true
                },
                telefono: {
                    minlength: 10
                }
            },
            messages:{
                cedula: {
                    required: "Ingrese una cédula",
                    minlength : "La cédula debe tener 10 dígitos"
                },
                nombres: {
                    required: "Ingrese nombres completos",
                    minlength : "Debe tener mínimo 4 carácteres"
                },
                apellidos: {
                    required: "Ingrese apellidos completos",
                    minlength : "Debe tener mínimo 3 carácteres"
                },
                correo: "Ingresa un correo válido",
                telefono: {
                    minlength: "Debe tener mínimo 10 dígitos"
                }
            },
            errorElement: "em"
        });
    }

    function guardarCliente(){
        $('#form-nuevo-cliente').submit(function(e){
            e.preventDefault();

            let cedula = $('#cedula').val();
            let nombres = $('#cliente-nombres').val();
            let apellidos = $('#cliente-apellidos').val();
            let telefono = $('#cliente-telefono').val();
            let correo = $('#cliente-correo').val();
            let direccion = $('#cliente-direccion').val();

            let json = {
                persona: {
                    cedula,
                    nombres,
                    apellidos,
                    telefono,
                    correo,
                    direccion
                }
            };

            if(!validar(json)){
                //procede a guardar
                console.log("debe llenar los campos");
            }else{
                if(valor == true){
                    console.log('no validar cedula');
                    guardar(json);
                }else{
                    if(validar_cedula(cedula)){
                        console.log('validar cedula');
                        guardar(json);
                    }else{
                        Swal.fire(
                            'Cliente',
                            'La cédula ingresada no es válida',
                            'error'
                          )
                    }
                }
            }
        });
    }

    function validar(json){
        let persona = json.persona;
        var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

        if(persona.cedula.length == 0){
            return false;
        }else
        if(persona.nombres.length == 0){
            return false;
        }else
        if(persona.apellidos.length == 0){
            return false;
        }else
        if(persona.correo.length == 0){
            return false;
        }else
        if(persona.cedula.length < 10 || persona.nombres.length < 5 || persona.apellidos.length < 5){
            return false;
        }
        else 
        if(caract.test(persona.correo) == false){
            return false;
        }
        else{
            return true;
        }
    }

    function guardar(json){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'cliente/save',
            data : "data=" + JSON.stringify(json),
            // especifica si será una petición POST o GET
            type : 'POST',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {

                if(response.status){
                    Swal.fire(
                        'Cliente!',
                        response.mensaje,
                        'success'
                    );

                    $('#form-nuevo-cliente')[0].reset();
                }else{
                    Swal.fire({
                        title: 'Error!',
                        text: response.mensaje,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                      })
                }
                console.log(response);
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function validar_cedula(cedula){
        if(cedula.length == 10){
        
            //Obtenemos el digito de la region que sonlos dos primeros digitos
            var digito_region = cedula.substring(0,2);
            
            //Pregunto si la region existe ecuador se divide en 24 regiones
            if( digito_region >= 1 && digito_region <=24 ){
              
              // Extraigo el ultimo digito
              var ultimo_digito   = cedula.substring(9,10);
    
              //Agrupo todos los pares y los sumo
              var pares = parseInt(cedula.substring(1,2)) + parseInt(cedula.substring(3,4)) + parseInt(cedula.substring(5,6)) + parseInt(cedula.substring(7,8));
    
              //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
              var numero1 = cedula.substring(0,1);
              var numero1 = (numero1 * 2);
              if( numero1 > 9 ){ var numero1 = (numero1 - 9); }
    
              var numero3 = cedula.substring(2,3);
              var numero3 = (numero3 * 2);
              if( numero3 > 9 ){ var numero3 = (numero3 - 9); }
    
              var numero5 = cedula.substring(4,5);
              var numero5 = (numero5 * 2);
              if( numero5 > 9 ){ var numero5 = (numero5 - 9); }
    
              var numero7 = cedula.substring(6,7);
              var numero7 = (numero7 * 2);
              if( numero7 > 9 ){ var numero7 = (numero7 - 9); }
    
              var numero9 = cedula.substring(8,9);
              var numero9 = (numero9 * 2);
              if( numero9 > 9 ){ var numero9 = (numero9 - 9); }
    
              var impares = numero1 + numero3 + numero5 + numero7 + numero9;
    
              //Suma total
              var suma_total = (pares + impares);
    
              //extraemos el primero digito
              var primer_digito_suma = String(suma_total).substring(0,1);
    
              //Obtenemos la decena inmediata
              var decena = (parseInt(primer_digito_suma) + 1)  * 10;
    
              //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
              var digito_validador = decena - suma_total;
    
              //Si el digito validador es = a 10 toma el valor de 0
              if(digito_validador == 10)
                var digito_validador = 0;
    
              //Validamos que el digito validador sea igual al de la cedula
              if(digito_validador == ultimo_digito){
                return true;
              }else{
                return false;
              }
              
            }else{
              // imprimimos en consola si la region no pertenece
              return false;
            }
         }else{
            //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
            return false;
         }    
    }

    function changeCedula(){
        $('#cedula').blur(function(){
            let cedula = $('#cedula').val();

            if(valor == false){
                if(!validar_cedula(cedula)){
                    Swal.fire({
                        title: 'Error!',
                        text: 'La cédula es invalida',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                      });
                }
            }
            
        });
    }

    function no_validar(){
        $('#no-validar').change(function(){
            valor = $('#no-validar').prop('checked');
            console.log(valor);
        });
    }
});