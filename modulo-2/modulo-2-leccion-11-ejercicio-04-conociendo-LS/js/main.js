'use strict';
const inputName = document.querySelector('.js-inputName');
const textName = document.querySelector('.js-nameText');

function handleRenderName() {
    localStorage.setItem('name', inputName.value);
    textName.innerHTML = localStorage.getItem('name');
    console.log(textName);
}
function handleGetName() {    
    inputName.value = localStorage.getItem('name');
    textName.innerHTML = localStorage.getItem('name');
}


inputName.addEventListener('keyup', handleRenderName);
window.addEventListener('load', handleGetName);
