const displayValorBefore = document.getElementById('valor-before');
const displayValorActualy = document.getElementById('valor-actualy');
const botonesDeNumeros = document.querySelectorAll('.number');
const botonesDeOperators = document.querySelectorAll('.Operator');


const display = new Display(displayValorBefore, displayValorActualy);

//conecta los botones numerales html con la funcion "agregarNumero" para que funcionen
botonesDeNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

//conecta los botones Operadores html con la funcion "computar" para que funcionen
botonesDeOperators.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});