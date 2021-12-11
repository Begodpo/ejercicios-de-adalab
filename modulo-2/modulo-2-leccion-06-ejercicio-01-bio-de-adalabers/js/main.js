'use strict';
const adalaber1 = {
name: 'Susana',
age: 34,
profession: 'periodista',
};
const adalaber2 = {
    name: 'Rocío',
    age: 25,
    profession: 'actriz',
    };

const container = document.querySelector('.js-container');

const text1 = `<p>Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}.</p>`;
const text2 = `<p>Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.profession}.</p>`;

container.innerHTML = text1 + text2;


