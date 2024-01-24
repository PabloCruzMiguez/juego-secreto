/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del Número Secreto'; 

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10'; */

//asignarTextoElemento('h1', 'Juego del Número Secreto!');
//asignarTextoElemento('p', 'Indica un numero del 1 al 10!');

let numeroSecreto = 0;

let intentos = 0;

let listaNumerosSorteados = [];
let numeroMaximo = 10;

condicionesIniciales();


//FUNCIONES!!!
function asignarTextoElemento(elemento, texto){
    //capturar valor del input por la etiqueta
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function intentoDeUsuario(){
    alert('Click desde el botón');
    return; // se supone que agragar este return es una buena practica (segun Alura)
}

/*function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}*/

/*
El objetivo de la lista numerosSorteados es ir almacenando cada numero que fue acertado para que no lo volvamos a utilizar cada vez que se genere un nuevo nummero
*/
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log('El número secreto es: ' + numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles!!')
    } else{
        //Si el numero generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

/*function verificarIntento(){
    //capturar el valor del input por el id
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    console.log(numeroDeUsuario == numeroSecreto);
    //ademas de verificar que los numeros sean iguales, verifica que tambien los tipos de datos sean iguales
    console.log(numeroDeUsuario === numeroSecreto);
    return;
} */

function verificarIntento(){
    //capturar el valor del input por el id
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p', `Acertaste el Número!!. Intentaste ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        intentos++;
        limpiarCaja();
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto menor');
        } else{
            if(numeroDeUsuario < numeroSecreto){
                asignarTextoElemento('p', 'El numero secreto es mayor'); 
            }
        }
    }
    return;
}

function limpiarCaja(){
    //como querySelector es un selector generico, tenemos que poner el # para los id's
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Número Secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}!`);
    numeroSecreto = generarNumeroSecreto();
    //console.log('El numero secretos es: ' + numeroSecreto);
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabiitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true)
}

