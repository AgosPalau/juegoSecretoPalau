
let numeroSecreto= 0;
let intentos=0;
let listaNumerosSorteados = [];
let numeroMaximo =10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    /*console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);*/
    if(numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`) //de esta forma nos aseguramos que si es en el 1er intento, no lo diga en plural
        //desabilitamos el diabled del boton reiniciar una vez que el usuario adivine
        document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor')
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos ++;
        limpiarCaja();
        }
    return;
}

function limpiarCaja(){
    //cuando el usuario no adivine, la caja se va a limpiar para que vuelva a ingresar un numero
    document.querySelector('#valorUsuario').value = ''; // el numeral es para llamar por ID (nombre)
}

//funcion para generar un numero aleatorio
function generarNumeroSecreto (){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
    //si el numero generado esta en la lista, no debo repetirlo
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }}
}

function condicionesIniciales (){
    asignarTextoElemento("h1","calculadora ALURA");
    asignarTextoElemento("p",`Indicar un numero del 1 al ${numeroMaximo}`);
    numeroSecreto =generarNumeroSecreto();
    intentos =1;
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    //necesitamos limpiar la caja 
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    // generar nuevamente el numero aleatorio
    // inicializar el numero con la cantidad de intentos
    condicionesIniciales();
    // deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();
