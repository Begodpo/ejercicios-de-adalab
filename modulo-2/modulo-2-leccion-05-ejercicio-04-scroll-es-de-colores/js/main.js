'use strict';

const body = document.querySelector('.js-body');
const windowScroll = window.scrollY;

function changeColor () {
    if (windowScroll < 250) {
        body.classList.add('color-one');
    } else if (windowScroll >= 250) {
        body.classList.add('color-two');
    }
}
    
window.addEventListener('scroll', changeColor);