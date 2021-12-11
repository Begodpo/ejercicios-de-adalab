'use strict';

function getEl(selector) {
    const element = document.querySelector(selector);
    if(element === null) {
        console.log('no existe ningún elemento con clase, id o tag llamado ${selector}');
    }
    return element;
}
const text = getEl(".js-text").innerHTML;
const num = parseInt(text); 


/*const container = getEl(".js-container");
console.log(container);
const image = getEl(".js-image");
console.log(image);
const title = getEl(".js-title");
console.log(title);
const text = getEl(".js-text");
console.log(text); */


function rest(number){
    if (number % 2 === 0) {
        return 'Este número es PAR:' + number;
    } else {
        return 'Este número es IMPAR:' + number;
    }    
}

console.log(rest(7));