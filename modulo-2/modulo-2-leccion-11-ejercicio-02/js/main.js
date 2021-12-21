'use strict';
console.log('ready');

const nameInput = document.querySelector('.js-name');
const searchButton = document.querySelector('.js-button');
const list = document.querySelector('.js-list');


function handleClikButton() {
    fetch(`https://swapi.py4e.com/api/people/?search=${nameInput.value}`)
        .then((response) => response.json())
        .then((nameData) => { 
            console.log(nameData);          
            const characters = nameData.results;         
            list.innerHTML = '';
            for(let i = 0; i < characters.length; i++) {
                list.innerHTML += `<li>Nombre: ${characters[i].name}</li> <li>Género: ${characters[i].gender} </li>`;                
            }           
        }); 
}        
    
searchButton.addEventListener('click', handleClikButton);