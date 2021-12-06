'use strict.'
let avocados;
const avocadoPrice = 1.5;
const money = 33;

/*if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
}*/

avocados = money >= avocadoPrice ? money / avocadoPrice : 0;
console.log(avocados);
// aguacates = al dinerito que tengo cuando es >= que el precio. Si es cierto (?) se divide entre el precio y si no es cierto(no me llega la pasta)(:) entonces los aguacates son 0.