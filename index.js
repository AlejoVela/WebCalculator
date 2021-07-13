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
let acumulator = [];

//funciones
const getData = (data) => {
    let str = $pantalla.innerHTML;
    let array = str.split("");

    if(array[array.length-1]==="+" || array[array.length-1]==="-" || array[array.length-1]==="/" || array[array.length-1]==="x"){
        acumulator.push(array[array.length-1]);
        cleanDisplay(false);
        $pantalla.innerHTML += data.innerHTML;
        console.log("Ingreso de simbolo al acumulador:\n"+acumulator);
    } else {
        $pantalla.innerHTML += data.innerHTML; 
    }
    
};
const getPi = () => {
    $pantalla.innerHTML += pi;    
};
const cleanDisplay = (cleanAcumulator) => {
    if (cleanAcumulator) {
        $pantalla.innerHTML = "";
        acumulator = [];
        resultado = 0;
        console.log("se limpio con CE");
    } else {
        $pantalla.innerHTML = "";
    }
};
const deleteLastCharacter = () => {
    if (DisplaySim($pantalla.innerHTML)) {
        $pantalla.innerHTML = $pantalla.innerHTML.slice(0, -1);
    }     
}
//se guardara el numero en el acumulador dependiendo de la operacion
//despues se limbiará la pantalla y se mostrará el 
//simbolo, se debe validar si previamente habia otro simbolo
const operation = (op) => {
    if (valSym(op)) {
        //si no hay simbolos al final de la cadena, entra a la funcion
        //validamos si el ultimo caracter del string es un "x" o un "/" y la
        //operacion entrante es un "-"
        acumulator.push($pantalla.innerHTML);
        cleanDisplay(false);
        $pantalla.innerHTML = op;
        console.log("Ingreso de numeros al acumulador:\n"+acumulator);
    } else {
        //si es falso, se debe cambiar el simbolo y eliminar del acumulador
        $pantalla.innerHTML = $pantalla.innerHTML.slice(0, -1);
        $pantalla.innerHTML += op;
        console.log("Cambio de simbolo al acumulador:\n"+acumulator);
    }
};
const equal = () => {
    //se valida que no hayan simbolo en pantalla
    //+, -,x, /, ., raiz
    if (resultado===0) {
        acumulator.push($pantalla.innerHTML);
        if (DisplaySim($pantalla.innerHTML)) {
            let op3r4tion = "";
            for (let i = 0; i < acumulator.length; i++) {
                //codigo operaciones
                if(i > 0){
                    if (DisplaySim(acumulator[i]) == false) {
                        op3r4tion = acumulator[i];
                        console.log("entro con el simbolo "+acumulator[i]);
                    } else {
                        if (op3r4tion === "+") {
                            resultado += parseFloat(acumulator[i]);
                        } else if (op3r4tion === "-") {
                            resultado -= parseFloat(acumulator[i]);
                        } else if (op3r4tion === "x") {
                            resultado *= parseFloat(acumulator[i]);
                        } else if (op3r4tion === "/") {
                            if(parseFloat(acumulator[i])!==0)
                            resultado /= parseFloat(acumulator[i]);
                        }
                    }
                } else {
                    resultado += parseFloat(acumulator[i]);
                }
            }
            $pantalla.innerHTML = resultado;
        }        
    }
};
//funcion que valida si la cadena ya tiene un punto
const valDags = () => {
    let str = $pantalla.innerHTML;
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
//se valida si hay un simbolo previamente ingresado al final de la cadena
const valSym = (op) => {
    let str = $pantalla.innerHTML;
    let array = str.split("");

    if(array[array.length-1]==="+" || array[array.length-1]==="-" || array[array.length-1]==="/" || array[array.length-1]==="x"){
        if ((array[array.length-1] === "x" || array[array.length-1] === "/") && op==="-") {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
};
const DisplaySim = (obj) => {
    if (obj!=="+" && obj!=="-" && obj!=="/" && obj!=="x") {
        //no hay simbolos en pantalla
        return true;
    } else {
        //hay simbolos en pantalla
        return false;
    }
}


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
$btnCE.onclick = function () {
    cleanDisplay(true);
};
$btnDel.onclick = function () {
    deleteLastCharacter();
};
//por mejorar
$btnPi.onclick = function () {
    getPi();
};
$btnPlus.onclick = function () {
    operation($btnPlus.innerHTML);  
};
$btnM.onclick = function () {
    operation($btnM.innerHTML);  
};
$btnX.onclick = function () {
    operation($btnX.innerHTML);  
};
$btnDiv.onclick = function () {
    operation($btnDiv.innerHTML);  
};
$btnEq.onclick = function () {
    equal(); 
};

/*
$btn.onclick = function () {
    getData($btn);
};*/