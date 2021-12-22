'use strict';


const showMsg = () => {
    const msg = document.querySelector('.js-msg');
    msg.classList.remove('hidden');
  };
  
  setTimeout(showMsg, 6000);

