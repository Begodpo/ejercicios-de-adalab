'use strict'
console.log('ready!');
// Coger valores del input

const allInputs = document.querySelectorAll('.js-input');
const getLocalTheme = localStorage.getItem('theme');



function changeColourTheme(inputValue) {
    
    if(inputValue === 'dark') {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
}

function saveAndChangeLocalStorage(themeColor) {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', themeColor);
    const currentTheme = localStorage.getItem('theme');
    changeColourTheme(currentTheme);
}

function inputHandler(event) {
    const inputValue = event.target.value;
    saveAndChangeLocalStorage(inputValue);
}

for (const input of allInputs) {
    input.addEventListener('click', inputHandler);
}



