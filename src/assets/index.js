const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');
console.log(h1);
console.log({ 
    h1,
    p, 
    parrafito,
    pid,
    input,
});
//const parrafo3 = document.getElementById('pid').innerHTML = 'Hello World!';

h1.innerHTML = 'Patito manipulador!!<br> Dark';
//h1.innerText = 'Patito manipulador!!<br> Dark';
//console.log(h1.getAttribute('class'));

//h1.setAttribute('class', 'rojo');
h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('rojo');
//input.value = 456;h1.classList.contains('rojo');
input.value = 456;

const img = document.createElement('img');
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/245px-Marvel_Logo.svg.png')
pid.innerHTML = '';
pid.appendChild(img);