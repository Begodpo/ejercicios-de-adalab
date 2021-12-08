'use strict';

function getEl(selector) {
    return document.querySelector(selector);
}

const container = getEl(".js-container");
console.log(container);
const image = getEl(".js-image");
console.log(image);
const title = getEl(".js-title");
console.log(title);
const text = getEl(".js-text");
console.log(text);