'use strict';

function getEl(selector) {
    const element = document.querySelector(selector);
    if(element === null) {
        console.log('no existe ningún elemento con clase, id o tag llamado ${selector}');
    }
    return element;
}

const container = getEl(".js-container");
console.log(container);
const image = getEl(".js-image");
console.log(image);
const title = getEl(".js-title");
console.log(title);
const text = getEl(".js-dext");
console.log(text); 




