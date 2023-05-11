const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var operAct = '';
var operAnt = '';
var oper = undefined;

// DEFINING METHODS WITH 'EventListener onclick'---------------------
botonNumeros.forEach(function (boton) {
    boton.addEventListener('click', function () {
        addNumero(boton.innerText);
        //  alert(boton.innerText);
    })
});

botonOpera.forEach(function (boton) {
    boton.addEventListener('click', function () {
        selectOper(boton.innerText);
        // alert(boton.innerText);
    })
});

botonIgual.addEventListener('click', function () {
    calcular();
    actDisplay();
});

botonDelete.addEventListener('click', function () {
    clear();
    actDisplay();
});

// DEFINING FUNCTIONS ---------------------
function addNumero(num) {
    operAct = operAct.toString() + num.toString();
    actDisplay();
}

function clear() {
    operAct = '';
    operAnt = '';
    oper = undefined;
}

function actDisplay() {
    result.value = operAct;
}

clear();