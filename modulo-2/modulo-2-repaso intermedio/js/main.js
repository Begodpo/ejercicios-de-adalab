'use strict';

// 1. Variables globales: querySelecto y datos de toda la página

const updateBtn = document.querySelector('.js_button');
const faceSelect= document.querySelector('.js_select_face');
const faceTitle = document.querySelector('.js_face');
const backgroundElem = document.querySelector('.js_page')

// 2. Funciones

function getRandom (max) {
    return Math.ceil(Math.random() * max);
}
// console.log(Math.floor(33.5) ); floor redondea hacia abajo
// console.log(Math.ceil(33.5) ); floor redondea hacia arriba

function changeFace() {
    
    // Coger el value de la usuaria
    const userValue = faceSelect.value; // Guardo el value de la usuaria en una constante, porque este value es el que tengo que usar en el condicional
    console.dir(faceSelect.value); // Esto me sirve para ver en la consola el value que tiene ahora mismo el faceSelect.
    

    // Comparar ese value
    if(userValue === 'happy') {
        // Si es happy, pintar :)
        //faceTitle.innerHTML = ':)'; Esto está bien hecho, pero en lugar de llamar al inner.HTML podemos llamar a una función que pinte la cara
        renderFace(':)');
    } 
    else if (userValue === 'sad') { // Aquí al ser la última opcion, podría ir sin el if
        // Si es sad, pintar :)
        //faceTitle.innerHTML = ':(';
        renderFace(':(');
    }
    // Pintar la cara
    function renderFace(face) { // es el nombre que hemos querido darle en este caso. Es como una variable y sus valores serian :) y :(
        faceTitle.innerHTML = face;
    }

    
}
function changeBackground() {    
    // Generar número aleatorio
    const randomNum = getRandom(100); // Me creo una variable que me devuelva lo que hace la función getRandom, que es generar el número aleatorio
    console.log({randomNum}); // poniendolo entre llaves, en la consola saldrá el nombre de la variable.

    // Comprobar si es par
    if(randomNum % 2 === 0) {
        // Si es par, poner fondo amarillo
        backgroundElem.classList.remove('chileanOrange'); // toggle es para cuando cambiar una sola clase, que la tenga  no la tenga.
        backgroundElem.classList.add('correctYellow');
    }else {
        // Si es impar, poner fondo naranja
        backgroundElem.classList.remove('correctYellow');
        backgroundElem.classList.add('chileanOrange');
    }

    

    
}

function handleClickUpdate(event) {
    event.preventDefault(); // Siempre en la primera línea del handle.
    changeFace();
    changeBackground();
} 

// 3. Código global: el que se ejecuta cuando se carga la página (listeners)

updateBtn.addEventListener('click', handleClickUpdate);






