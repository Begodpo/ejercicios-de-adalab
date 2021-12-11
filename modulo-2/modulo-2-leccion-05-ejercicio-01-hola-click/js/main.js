'use strict';
const button = document.querySelector('.js-button');
const text = document.querySelector('.js-text');

/*function showText() {
    text.innerHTML = 'Ole yo y la mujer que me parió!';
}
button.addEventListener('click', showText);*/

/* Declarando la función cuando la pasamos como argumento:
button.addEventListener('click', function showText() {
    text.innerHTML = '¡Ole yo y la mujer que me pario!';
}); */

// Con una arrow function:
button.addEventListener('click', () => text.innerHTML = '¡Ole yo y la mujer que me parió!');
