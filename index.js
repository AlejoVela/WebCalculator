//Variables dom
let $btn0 = document.getElementById("btn0");
let $btn1 = document.getElementById("btn1");
let $btn2 = document.getElementById("btn2");
let $btn3 = document.getElementById("btn3");
let $btn4 = document.getElementById("btn4");
let $btn5 = document.getElementById("btn5");
let $btn6 = document.getElementById("btn6");
let $btn7 = document.getElementById("btn7");
let $btn8 = document.getElementById("btn8");
let $btn9 = document.getElementById("btn9");
let $btnD = document.getElementById("btnD");
let $btnCE = document.getElementById("btnCE");
let $btnDiv = document.getElementById("btnDiv");
let $btnDel = document.getElementById("btnDel");
let $btnX = document.getElementById("btnX");
let $btnSQ = document.getElementById("btnSQ");
let $btnM = document.getElementById("btnM");
let $btnPi = document.getElementById("btnPi");
let $btnPlus = document.getElementById("btnPlus");
let $btnEq = document.getElementById("btnEq");
let $pantalla = document.getElementById("pantalla");
//variables globales
let pi = "3.141592";
let resultado = 0;
let acumulator = 0;

//funciones
const getData = (data) => {
    pantalla.innerHTML += data.innerHTML;    
};
const getPi = () => {
    pantalla.innerHTML += pi;    
};
const cleanDisplay = (cleanAcumulator) => {
    if (cleanAcumulator) {
        pantalla.innerHTML = "";
        acumulator = 0;
        resultado = 0;
        console.log("se limpio con CE");
    } else {
        pantalla.innerHTML = "";
    }
};
const deleteLastCharacter = () => {
    pantalla.innerHTML = pantalla.innerHTML.slice(0, -1);
}
//se guardara el numero en el acumulador dependiendo de la operacion
//despues se limbiará la pantalla y se mostrará el 
//simbolo, se debe validar si previamente habia otro simbolo
const oparation = (op) => {

};
const equal = () => {
    //se valida que no hayan simbolo en pantalla
    //+, -,x, /, ., raiz
};
//funcion que valida si la cadena ya tiene un punto
const valDags = () => {
    let str = pantalla.innerHTML;
    let array = str.split("");
    console.log(array);    
    for (let i = 0; i < array.length; i++) {
        if(array[i]==="."){
            console.log("ya existe un punto en la cadena");
            return false;
        }
    }
    return true;
};



//eventos
$btn0.onclick = function () {
    getData($btn0);
};
$btn1.onclick = function () {
    getData($btn1);
};
$btn2.onclick = function () {
    getData($btn2);
};
$btn3.onclick = function () {
    getData($btn3);
};
$btn4.onclick = function () {
    getData($btn4);
};
$btn5.onclick = function () {
    getData($btn5);
};
$btn6.onclick = function () {
    getData($btn6);
};
$btn7.onclick = function () {
    getData($btn7);
};
$btn8.onclick = function () {
    getData($btn8);
};
$btn9.onclick = function () {
    getData($btn9);
};
$btnD.onclick = function () {
    if (pantalla.innerHTML !== "" && valDags()==true) {
        getData($btnD);    
    }    
};
//por mejorar
$btnPi.onclick = function () {
    getPi();
};
$btnCE.onclick = function () {
    cleanDisplay(true);
};
$btnDel.onclick = function () {
    deleteLastCharacter();
};
/*
$btn.onclick = function () {
    getData($btn);
};*/











