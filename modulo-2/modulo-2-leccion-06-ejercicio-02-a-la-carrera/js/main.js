'use strict';

const adalaber1 = {
    name: 'Susana',
    age: 34,
    profession: 'periodista',
    distancia: 50,
    run: function() {
        console.log('Estoy corriendo');
    },
    runAMarathon: function(numero) {
        console.log(`Estoy corriendo un maratón de ${numero} kilómetros`);
    }
    };
    
  /*adalaber1.run = function() {
    console.log('Estoy corriendo');
  }  Otra forma /*/

  adalaber1.run();
  adalaber1.runAMarathon(adalaber1.distancia);

    const container = document.querySelector('.js-container');
    
    const text1 = `<p>Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}.</p>`;
    
    container.innerHTML = text1;