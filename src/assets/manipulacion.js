const h2 =document.querySelector('h2');
const input1 = document.querySelector('#calcular1');
const input2 = document.querySelector('#calcular2');
const boton = document.querySelector('#btnCalcular');
const result = document.querySelector('#resultado');

boton.addEventListener('click', botonOnclick);

function botonOnclick(){
    const suma = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = "Resultado: " + parseInt(suma);

}