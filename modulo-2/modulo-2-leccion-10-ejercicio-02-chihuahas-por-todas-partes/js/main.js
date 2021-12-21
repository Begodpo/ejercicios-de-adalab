'use strict';
const btn = document.querySelector(".js-dog");
const btn2 = document.querySelector(".js-chihuahua");

function getDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        const img = document.querySelector("img");
        img.src = data.message;
        img.alt = "Un perro";
      });
}     

function getChihuahua() {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Un chihuahua"; 
    }); 
}      


  
  
  btn.addEventListener("click", getDogImage);
  btn2.addEventListener("click", getChihuahua);
