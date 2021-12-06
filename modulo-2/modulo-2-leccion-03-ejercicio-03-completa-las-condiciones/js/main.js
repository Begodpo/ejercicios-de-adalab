'use strict';

let number = 14
const text = document.querySelector('.js-text');

if (number === 0) {
    text.innerHTML = 'El número es 0';
  } else if (number < 0) {
    text.innerHTML = 'El número es negativo';
  } else if (number + 2 > 13 && number <= 20) {
    text.innerHTML = 'El número más 2 es mayor que 13 pero menor o igual que 20';
  } else if (number > 20 && number < 50) {
    text.innerHTML = 'El número es mayor que 20 pero menor que 50';
  } else { 
    text.innerHTML = 'el número no es 123123125';
  }