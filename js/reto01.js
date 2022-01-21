/**
 * ANSALO PUZZLE
 * 
 * h2 id->letras
 * 
 * 
 * h2   LETRAS
 * 
 * 
 * h2   NUMEROS
 * 
 * 
 * h2 id->numeros
 * 
 * 
 * table
 * tr>td>btn*12 4f 3c
 * 
 * A cada boton
 * A-1 B-2 C-3
 * D-4 E-5 F-6
 * G-7 H-8 I-9
 *  .  J-0  .
 * 
 * Primero se deben llenar las letras en orden alfabetico obligatoriamente
 * Lo numeros no existiran hasta que las letras estén completas
 */

//Tengo las cajas
let cajaLetras = document.getElementById("letras");
let cajaNumeros = document.getElementById("numeros");

//Tengo los botones
let btnA = document.getElementById("a");
let btnB = document.getElementById("b");
let btnC = document.getElementById("c");
let btnD = document.getElementById("d");
let btnE = document.getElementById("e");
let btnF = document.getElementById("f");
let btnG = document.getElementById("g");
let btnH = document.getElementById("h");
let btnI = document.getElementById("i");
let btnJ = document.getElementById("j");
let contenidoCajaLetras;

const tenerPermiso = (alfabetico, numerico) => {
    let acceso = false;
    contenidoCajaLetras = cajaLetras.innerHTML;
    let contenidoCajaNumeros = cajaNumeros.innerHTML;

    if(alfabetico==contenidoCajaLetras){
        acceso = true;
    }else{
        if(contenidoCajaLetras==="ABCDEFGHIJ"){

            if(numerico==contenidoCajaNumeros){
                acceso = true;
            }

        }
    }

    return acceso;
}

const dispararAlert = () => {
    alert("No se puede realizar esa accion");
}

const llenarA = () => {
    let permiso = tenerPermiso("", "");

    if(permiso && contenidoCajaLetras!="ABCDEFGHIJ"){
        cajaLetras.innerHTML="A";
    }else if(permiso && contenidoCajaLetras==="ABCDEFGHIJ"){
        cajaNumeros.innerHTML="1";
    }else{
        dispararAlert();
    }

}

const llenarB = () => {
    let permiso = tenerPermiso("A", "1");

    if(permiso && contenidoCajaLetras!="ABCDEFGHIJ"){
        cajaLetras.innerHTML+="B";
    }else if(permiso && contenidoCajaLetras==="ABCDEFGHIJ"){
        cajaNumeros.innerHTML+="2";
    }else{
        dispararAlert();
    }

}

const llenarC = () => {
    let permiso = tenerPermiso("AB", "12");

    if(permiso && contenidoCajaLetras!="ABCDEFGHIJ"){
        cajaLetras.innerHTML+="C";
    }else if(permiso && contenidoCajaLetras==="ABCDEFGHIJ"){
        cajaNumeros.innerHTML+="3";
    }else{
        dispararAlert();
    }

}

const llenarD = () => {
    let permiso = tenerPermiso("ABC", "123");

    if(permiso && contenidoCajaLetras!="ABCDEFGHIJ"){
        cajaLetras.innerHTML+="D";
    }else if(permiso && contenidoCajaLetras==="ABCDEFGHIJ"){
        cajaNumeros.innerHTML+="4";
    }else{
        dispararAlert();
    }

}

const llenarE = () => {
    let permiso = tenerPermiso("ABCD", "1234");

    if(permiso && contenidoCajaLetras!="ABCDEFGHIJ"){
        cajaLetras.innerHTML+="E";
    }else if(permiso && contenidoCajaLetras==="ABCDEFGHIJ"){
        cajaNumeros.innerHTML+="5";
    }else{
        dispararAlert();
    }

}

const llenarF = () => {
    let permiso = tenerPermiso("ABCDE", "12345");

    if(permiso && contenidoCajaLetras!="ABCDEFGHIJ"){
        cajaLetras.innerHTML+="F";
    }else if(permiso && contenidoCajaLetras==="ABCDEFGHIJ"){
        cajaNumeros.innerHTML+="6";
    }else{
        dispararAlert();
    }

}

const llenarG = () => {
    let permiso = tenerPermiso("ABCDEF", "123456");

    if(permiso && contenidoCajaLetras!="ABCDEFGHIJ"){
        cajaLetras.innerHTML+="G";
    }else if(permiso && contenidoCajaLetras==="ABCDEFGHIJ"){
        cajaNumeros.innerHTML+="7";
    }else{
        dispararAlert();
    }

}

const llenarH = () => {
    let permiso = tenerPermiso("ABCDEFG", "1234567");

    if(permiso && contenidoCajaLetras!="ABCDEFGHIJ"){
        cajaLetras.innerHTML+="H";
    }else if(permiso && contenidoCajaLetras==="ABCDEFGHIJ"){
        cajaNumeros.innerHTML+="8";
    }else{
        dispararAlert();
    }

}

const llenarI = () => {
    let permiso = tenerPermiso("ABCDEFGH", "12345678");

    if(permiso && contenidoCajaLetras!="ABCDEFGHIJ"){
        cajaLetras.innerHTML+="I";
    }else if(permiso && contenidoCajaLetras==="ABCDEFGHIJ"){
        cajaNumeros.innerHTML+="9";
    }else{
        dispararAlert();
    }

}

const llenarJ = () => {
    let permiso = tenerPermiso("ABCDEFGHI", "123456789");

    if(permiso && contenidoCajaLetras!="ABCDEFGHIJ"){
        cajaLetras.innerHTML+="J";
    }else if(permiso && contenidoCajaLetras==="ABCDEFGHIJ"){
        cajaNumeros.innerHTML+="0";
    }else{
        dispararAlert();
    }

}

btnA.onclick = () => {
    llenarA();
}

btnB.onclick = () => {
    llenarB();
}

btnC.onclick = () => {
    llenarC();
}

btnD.onclick = () => {
    llenarD();
}

btnE.onclick = () => {
    llenarE();
}

btnF.onclick = () => {
    llenarF();
}

btnG.onclick = () => {
    llenarG();
}

btnH.onclick = () => {
    llenarH();
}

btnI.onclick = () => {
    llenarI();
}

btnJ.onclick = () => {
    llenarJ();
}