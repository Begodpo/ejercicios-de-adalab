'use strict';


const humanAge = document.querySelector('.js-human');
const dogAge = document.querySelector('.js-dog');

let dog = 1;

if (dog === 1) {
    humanAge.innerHTML = humanAge.innerHTML + 15;
} else if (dog === 2) {
    humanAge.innerHTML = humanAge.innerHTML + (15 + 9);
} else if (dog > 2) {
    humanAge.innerHTML = humanAge.innerHTML + (15 + 9 + (dog -2) * 5);
}

dogAge.innerHTML = dogAge.innerHTML + dog;