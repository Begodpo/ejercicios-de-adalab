'use strict';
console.log('holi');

const input = document.querySelector('.js-input');
const button = document.querySelector('.js-search');
const name = document.querySelector('.js-name');
const img = document.querySelector('.js-image');
const repos = document.querySelector('.js-repos');



function renderUser(name, repos, img, nameData, reposData, imgData) {
    name.innerText = nameData;
    repos.innerText = reposData;
    img.src = imgData;

}        
function handleClickButton(event) {
    event.preventDefault();
    const searchData = input.value; 
    fetch(`https://api.github.com/users/${searchData}`)
        .then(response => response.json())
        .then(data => {
         console.log(data);  
        renderUser(name, repos, img, data.name, data.public_repos, data.avatar_url); 
        })  
    
   
}

button.addEventListener('click', handleClickButton);