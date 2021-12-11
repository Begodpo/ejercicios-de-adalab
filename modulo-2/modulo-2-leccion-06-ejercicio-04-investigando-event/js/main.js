'use strict';
const button = document.querySelector('.js-button');

function handleClikButton(event) {
    console.log(button); 
    console.dir(button);  
}



button.addEventListener('click', handleClikButton);