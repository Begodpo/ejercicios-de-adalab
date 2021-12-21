'use strict';
console.log('ready');

const marks = [5, 4, 6, 7, 9];
const addPoint = mark => mark +1;
console.log(addPoint);
const inflatedMarks = marks.map(addPoint);
console.log(inflatedMarks);




