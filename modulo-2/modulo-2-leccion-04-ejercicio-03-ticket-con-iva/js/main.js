'use strict';


function result(a) {
    return `Precio sin IVA: ${a}, IVA: ${a * 0.21} y total: ${a + a * 0.21}`; 
}

const resultado = result(10);
console.log(resultado);