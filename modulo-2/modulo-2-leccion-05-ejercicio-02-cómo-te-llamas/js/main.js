'use strict';
const input = document.querySelector('.js.input');
const button = document.querySelector('.js-button');

function showText() {
    if (input !== '') {
        console.log = ('Hola, ${input}');
    } else {
        console.log('Introduce un nombre');
    }    
}
button.addEventListener('click', showText);