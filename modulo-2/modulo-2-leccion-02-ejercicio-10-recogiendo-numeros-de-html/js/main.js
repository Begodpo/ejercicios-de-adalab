'use strict';

const age = document.querySelector('.js-age');
const hours = 365 * 24; 
hours.innerHTML = `He vivido ${hours} * parseInt(age.innerHTML) horas.`;
