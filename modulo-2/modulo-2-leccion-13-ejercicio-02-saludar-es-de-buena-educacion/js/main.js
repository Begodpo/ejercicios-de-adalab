'use strict';
console.log('ready');

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
/*const getNames = name => `Bienvenida ${name}`;
const welcome = names.map(getNames);
console.log(welcome);*/

const welcome = names.map((name) => `Bienvenida ${name}`);
console.log(welcome);