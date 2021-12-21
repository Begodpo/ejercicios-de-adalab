'use strict'
console.log('ready!');

/*const dataActions = document.querySelector('.js-data-actions-add');
dataActions.classList.remove('hidden');*/

const menudropdown = document.querySelector('.js-menudropdown');
const dataList = document.querySelector('.js-dataList');
const data = document.querySelector('.js-data');
const dataSearch = document.querySelector('.js-dataSearch');

//menudropdown.classList.remove('collapsed');

dataSearch.value = '';
const textSearch = dataSearch.value;

const list1Url = "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion";
const list1Desc = "JS en los materiales de Adalab";
const list1Seen = "checked";
const list1Tag1 = "javascript"; 
const list1Tag2 = "HTML"; 

let html = '';


if (list1Desc.includes(textSearch)) {
    html = `<li class="data__listitem">
    <article class="data__item">
    <p class="item__url">
        <a href=${list1Url.replace('https://', '')} target="_blank" rel="noopener noreferrer">
        books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion
        </a>
    </p>
    <p class="item__seen">
        <input type="checkbox" ${list1Seen} name="item_imp_2" id="item_imp_2">
    </p>
    <p class="item__desc">${list1Desc}</p>
    <ul class="item__tags">
        <li class="item__tag">${list1Tag1.toLowerCase()}</li><li class="item__tag">${list1Tag2.toLowerCase()}</li>
    </ul>
    </article>
    </li>`;
}  



const list2Url = "https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/";
const list2Desc = "Ideas de proyectos JS";
const list2Seen = "checked";
const list2Tag1 = "javascript";
const list2Tag2 = "portfolio";

if (list2Desc.includes(textSearch)) {
    html += `<li class="data__listitem">
    <article class="data__item">
    <p class="item__url">
        <a href=${list2Url.replace('https://', '')} target="_blank">thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/</a></a></p>
    <p class="item__seen">
        <input type="checkbox" ${list2Seen} name="item_imp_1" id="item_imp_1">
    </p>
    <p class="item__desc">${list2Desc}</p>
    <ul class="item__tags">
        <li class="item__tag">${list2Tag1.toLowerCase()}</li><li class="item__tag">${list2Tag2.toLowerCase()}</li>
    </ul>
    </article>
    </li>`;
}    

    const list3Url = "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web";
    const list3Desc = "HTML en los materiales de Adalab";
    const list3Seen = "";
    const list3Tag1 = "HTML";
    const list3Tag2 = "CSS";
    
if (list3Desc.includes(textSearch)) {
    html += `<li class="data__listitem">
    <article class="data__item">
    <p class="item__url">
    <a
      href="${list3Url.replace('https://', '')}
      target="_blank"
      rel="noopener noreferrer"
      >books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web</a
    >
    </p>
    <p class="item__seen">
        <input type="checkbox" ${list3Seen} name="item_imp_2" id="item_imp_2" />
    </p>
    <p class="item__desc">${list3Desc}</p>
    <ul class="item__tags">
        <li class="item__tag">${list3Tag1.toLowerCase()}</li>
        <li class="item__tag">${list3Tag2.toLowerCase()}</li>
    </ul>
    </article>
    </li>`;
}

// ------- Validar columna de categorías (etiquetas)

if ((list1Tag1 === "") & (list1Tag2 === "")) {
    html += `<p class="item__tag">No tiene etiquetas</p>`;
  } else if ((list2Tag1 === "") & (list2Tag2 === "")) {
        html += `<p class="item__tag">No tiene etiquetas</p>`;   
    } else if ((list3Tag1 === "") & (list3Tag1 === "")) {
        html += `<p class="item__tag">No tiene etiquetas</p>`;
      }  




dataList.innerHTML = html;

// --------------- Vista del panel en diferentes formatos

if (data.classList.contains('tableview')){    
    data.classList.add('listview');
    data.classList.remove('tableview');
} else if (data.classList.contains('listview')) {
    data.classList.remove('listview');
    data.classList.add('tableview');
}



 
