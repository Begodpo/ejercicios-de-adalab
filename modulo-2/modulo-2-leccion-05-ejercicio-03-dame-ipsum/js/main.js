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
    },
    showBio: function() {
        this.name = 'María';
        return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.profession}`;         
    }
    };
 const adalaber2 = {
    name: 'Rocío',
    age: 25,
    profession: 'actriz',
    showBio: function() {
        return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.profession}`;      
    }
    };
    
    

    console.log(adalaber1.showBio());
    console.log(adalaber2.showBio());
  /*adalaber1.run = function() {
    console.log('Estoy corriendo');
  }  Otra forma /*/
  
  adalaber1.run();
  adalaber1.runAMarathon(adalaber1.distancia);
 