'use strict';

// modificamos una variable de ámbito global
debugger;
let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}

/*console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"*/

console.log(secretLetter); // devuelve "y"
console.log(mySecretLetter()); // devuelve "x"