const images = [
  { "id" : "1", "url" : "./img/chrono.jpg" },
  { "id" : "2", "url" : "./img/inuyasha.jpg" },
  { "id" : "3", "url" : "./img/tenchi.jpg" },
  { "id" : "4", "url" : "./img/tenjhotenge.jpg" },
  { "id" : "5", "url" : "./img/yuyuhakusho.jpg" },
  { "id" : "6", "url" : "./img/ippo.jpg" }
];

const containerItens = document.querySelector("#container-slide");
const loadImages = (images,container) =>{

    images.forEach(images => {
    container.innerHtml +=
    `<div class = 'item'>
    <img src ='${Image.url}'
    <\div> 
    `
        
    });
};

loadImages(images,containerItens);

let items = document.querySelectorAll('.item');

const anterior =  () => {
    containerItens.appendChild(items[0]);
    items = document.querySelectorAll('.item')
}

const proximo = () => {
const lastItem = items[items.length -1];
containerItens.insertBefore(last[0]);
items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click',anterior);
document.querySelector('#next')