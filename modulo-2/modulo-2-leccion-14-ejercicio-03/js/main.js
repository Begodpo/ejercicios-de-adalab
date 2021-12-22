'use strict';
let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const text = document.querySelector('.js-timeText');
  const time = document.querySelector('.js-time');  
  if (counter < 2) {
    text.innerHTML = `Escrito hace ${counter} segundo`;
  } else if (counter < 60) {
    text.innerHTML = `Escrito hace ${counter} segundos`;
  } else if (counter === 60) {
    text.innerHTML = `Escrito hace 1 minuto`;
  }
};


setInterval(incrementAndShowCounter, 1000);