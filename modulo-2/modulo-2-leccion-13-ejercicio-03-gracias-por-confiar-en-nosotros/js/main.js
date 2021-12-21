'use strict';
console.log('ready')
const users = [
    { name: "María", isPremium: false },
    { name: "Lucía", isPremium: true },
    { name: "Susana", isPremium: true },
    { name: "Rocío", isPremium: false },
    { name: "Inmaculada", isPremium: false },
  ];
  

  const welcome = users.map((user) => {
      let textWelcome = `Bienvenida ${user.name}.`;
      if (user.isPremium === true) {
        textWelcome += ` Gracias por confiar en nosotros`;
      }  
      return textWelcome;
      
    });

    console.log(welcome);    
    