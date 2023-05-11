//variables globales que podran ser utilizadas por cualquier función
var operacion = '';
var numero1 = 0;
var numero2 = 0;
var resultado = 0;
var banderaNuevoValor = false;

function recuperarValor(){

    let laPantalla = document.getElementById('pantallaResultado');

    if(banderaNuevoValor == true){

        console.log('banderaNuevoValor');
        laPantalla.innerText = '0';
        banderaNuevoValor = false;
    }

    let laPantallaValorString = document.getElementById('pantallaResultado').innerText;

    console.log(laPantallaValorString);
    //let laPantallaValorInt = parseInt(laPantallaValorString);

    if (laPantallaValorString == '0') {
        return -120;
    }

    let cantidadCaracteres = laPantallaValorString.length;

    if (cantidadCaracteres < 12){
        return laPantallaValorString;
    }else{
        alert('Ha superado el limite de caracteres');

        //retornamos un valor centinela que avisa que se llego al limite
        return -99;
    }

    

}

function accionBoton1(){

    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();

    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -120){

        let nuevoValorPantalla = '1';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }else{

        let nuevoValorPantalla = valorAnteriorPantalla + '1';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }
        
    }

}

function accionBoton2(){

    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();

    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -120){

        let nuevoValorPantalla = '2';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }else{

        let nuevoValorPantalla = valorAnteriorPantalla + '2';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }
        
    }
    

}

function accionBoton3(){

    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();

    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -120){

        let nuevoValorPantalla = '3';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }else{

        let nuevoValorPantalla = valorAnteriorPantalla + '3';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }
        
    }

}

function accionBoton4(){

    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();

    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -120){

        let nuevoValorPantalla = '4';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }else{

        let nuevoValorPantalla = valorAnteriorPantalla + '4';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }
        
    }

}

function accionBoton5(){

    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();

    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -120){

        let nuevoValorPantalla = '5';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }else{

        let nuevoValorPantalla = valorAnteriorPantalla + '5';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }
        
    }

}

function accionBoton6(){

    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();

    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -120){

        let nuevoValorPantalla = '6';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }else{

        let nuevoValorPantalla = valorAnteriorPantalla + '6';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }
        
    }

}

function accionBoton7(){

    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();

    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -120){

        let nuevoValorPantalla = '7';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }else{

        let nuevoValorPantalla = valorAnteriorPantalla + '7';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }
        
    }

}

function accionBoton8(){

    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();

    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -120){

        let nuevoValorPantalla = '8';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }else{

        let nuevoValorPantalla = valorAnteriorPantalla + '8';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }
        
    }

}

function accionBoton9(){

    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();

    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -120){

        let nuevoValorPantalla = '9';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }else{

        let nuevoValorPantalla = valorAnteriorPantalla + '9';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }
        
    }

}

function accionBoton0(){

    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();

    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -120){

        let nuevoValorPantalla = '0';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }else{

        let nuevoValorPantalla = valorAnteriorPantalla + '0';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }
        
    }

}

function accionaBotonPunto(){

    let laPantalla = document.getElementById('pantallaResultado');
    let valorAnteriorPantalla = recuperarValor();

    if(valorAnteriorPantalla != -99){

        if(valorAnteriorPantalla == -120){

        let nuevoValorPantalla = '.';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }else{

        let nuevoValorPantalla = valorAnteriorPantalla + '.';

        laPantalla.value = nuevoValorPantalla;
        laPantalla.innerText = nuevoValorPantalla;

        }
        
    }

}

function accionBotonSumar(){

    operacion = '+';
    numero1 = recuperarValor();
    banderaNuevoValor = true;

}

function accionBotonRestar(){

    operacion = '-';
    numero1 = recuperarValor();
    banderaNuevoValor = true;

}

function accionBotonMultiplicar(){

    operacion = '*';
    numero1 = recuperarValor();
    banderaNuevoValor = true;

}

function accionBotonDividir(){

    operacion = '/';
    numero1 = recuperarValor();
    banderaNuevoValor = true;

}

function enviarAPantalla(dato){
    let laPantalla = document.getElementById('pantallaResultado');
    let datoString = dato.toString();
    laPantalla.innerText = datoString;
}

function limpiarNumero(){

    numero1 = recuperarValor();
    banderaNuevoValor = true;

}



function accionBotonIgual(){

    banderaNuevoValor = false;
    numero2 = recuperarValor();

    console.log(operacion);

    if(operacion == '+'){

        console.log('accionBotonIgual '+'numero1 ' + numero1 + 'numero2 ' + numero2);
        resultado = parseInt(numero1) + parseInt(numero2);
    
    }
    else if(operacion == '-'){
        resultado = parseInt(numero1) - parseInt(numero2);
    }
    else if(operacion == '/'){
        resultado = parseInt(numero1) / parseInt(numero2);
    }
    else if(operacion == '*'){
        resultado = parseInt(numero1) * parseInt(numero2);
    }

    enviarAPantalla(resultado);

    numero1 = limpiarNumero();

}

function accionBotonBorrar(){
    let laPantalla = document.getElementById('pantallaResultado');
    laPantalla.value = '0';
    laPantalla.innerText = '0';
}


//Esta accion se encarga de buscar cada boton en el dom
function asignarEventos(){

    let elBoton1 = document.getElementById('btn1');
    elBoton1.addEventListener('click', accionBoton1);

    let elBoton2 = document.getElementById('btn2');
    elBoton2.addEventListener('click', accionBoton2);

    let elBoton3 = document.getElementById('btn3');
    elBoton3.addEventListener('click', accionBoton3);

    let elBoton4 = document.getElementById('btn4');
    elBoton4.addEventListener('click', accionBoton4);

    let elBoton5 = document.getElementById('btn5');
    elBoton5.addEventListener('click', accionBoton5);

    let elBoton6 = document.getElementById('btn6');
    elBoton6.addEventListener('click', accionBoton6);

    let elBoton7 = document.getElementById('btn7');
    elBoton7.addEventListener('click', accionBoton7);

    let elBoton8 = document.getElementById('btn8');
    elBoton8.addEventListener('click', accionBoton8);

    let elBoton9 = document.getElementById('btn9');
    elBoton9.addEventListener('click', accionBoton9);

    let elBoton0 = document.getElementById('btn0');
    elBoton0.addEventListener('click', accionBoton0);

    let elBotonPunto = document.getElementById('btnPunto');
    elBotonPunto.addEventListener('click', accionaBotonPunto);

    let elBotonSumar = document.getElementById('btnSumar');
    elBotonSumar.addEventListener('click', accionBotonSumar);

    let elBotonRestar = document.getElementById('btnRestar');
    elBotonRestar.addEventListener('click', accionBotonRestar);

    let elBotonMultiplicar = document.getElementById('btnMultiplicar');
    elBotonMultiplicar.addEventListener('click', accionBotonMultiplicar);

    let elBotonDividir = document.getElementById('btnDividir');
    elBotonDividir.addEventListener('click', accionBotonDividir);

    let elBotonIgual = document.getElementById('botonIgual');
    elBotonIgual.addEventListener('click', accionBotonIgual);

    let elBotonBorrar = document.getElementById('btnBorrar');
    elBotonBorrar.addEventListener('click', accionBotonBorrar);
}