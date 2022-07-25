
const form = document.querySelector('#form');
const input1f = document.querySelector('#calcular1f');
const input2f = document.querySelector('#calcular2f');
const botonf = document.querySelector('#btnCalcularf');
const resultf = document.querySelector('#resultadof');

botonf.addEventListener('click', botonfOnclick);

function botonfOnclick(event){
    console.log({event});
    event.preventDefault();
    const sumaf = parseInt(input1f.value) + parseInt(input2f.value);
    resultf.innerText = "Resultado: " + sumaf;

}