// DEFINING CONSTANTES
// reciben el 'name' del boton por medio de 'document.getElementsByName'
const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];

// DEFINING VAR 'result'
// muestra resultado por pantalla mediante 'document.getElementById'
var result = document.getElementById('result');

// DECLARING VARIABLES
var operAnt = '';
var operAct = '';
var oper = undefined;

// DEFINING METHODS
// Asignando evento 'EventListener Onclick' a buttons 
botonNumeros.forEach(function (boton) {            //Recorriendo array de 'botonNumeros'
    boton.addEventListener('click', function () {   //Add evento 'Onclick' y llamando una funcion
        addNumero(boton.innerText);  //Method 'addNumero' Devuelve texto/numero clickeado
    })
});

botonOpera.forEach(function (boton) {
    boton.addEventListener('click', function () {
        selectOper(boton.innerText); //Method 'selectOper'
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
//Function para seleccionar operacion
function selectOper(op) {
    if (operAct === '') return;
    if (operAnt !== '') {
        calcular();
    }
    oper = op.toString();
    operAnt = operAct;
    operAct = '';
}

// Function para calcular operacion
function calcular() {
    var calculo;                                        //Defining var 'calculo'
    const anter = parseFloat(operAnt); //Convirtiendo  a constantes numeros pngresados
    const act = parseFloat(operAct); //por var 'operAnt' y 'operAct'
    if (isNaN(anter) || isNaN(act)) return; //condicional verificando si son numericos valores ingresados con function predefinida 'isNaN'
    switch (oper) { //Ejecutando ciclo switch segun sea el caso 
        case '+':
            calculo = anter + act;
            break;
        case '-':
            calculo = anter - act;
            break;
        case 'x':
            calculo = anter * act;
            break;
        case '/':
            calculo = anter / act;
            break;
        default:
            return;
    }
    operAct = calculo; //Definiendo resultados para
    oper = undefined;  //cada variable
    operAnt = '';
}

//Function para add numeros de la calculadora
function addNumero(num) {
    operAct = operAct.toString() + num.toString();// con este metodo se van agregando segun la tecla que se presione
    actDisplay();                                                     //con 'actDisplay()' se van mostrando en pantalla
}

//Function para limpiar pantalla
function clear() {
    operAct = '';
    operAnt = '';
    oper = undefined;
}

//Function para mostrar que se esta digitando en el output/pantalla
function actDisplay() {
    result.value = operAct;
}

//Llamando function 'clear()' en toda la page
clear();