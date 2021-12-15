'use strict';
console.log('ready!');

// Ejercicio 2: crea un bucle que muestre 10 veces, en la consola, el texto Voy por la vuelta X siendo el número de vueltas desde 1 hasta 10 (no desde 0 hasta 9).

for (let i =1; i < 11; i++) {
    console.log('Voy por la vuelta ' + i);
}

// Ejercicio 3: Vamos a partir de una variable acc con valor 0. Construiremos un bucle que se ejecute 10 veces y sume 2 a la variable acc en cada iteración del bucle. Al acabar el bucle, mostraremos en la consola el texto El resultado es: X, siendo X el valor de la variable acc.

for (let i = 0; i < 20; i = i + 2) {
    console.log('El resultado es: ' + i);
}

