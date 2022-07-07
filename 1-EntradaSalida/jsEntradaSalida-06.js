/*
Gabriel Vallejo
DIV E 
EJ 6 E/S

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar()
{

//crear variables

let numeroUno;
let numeroDos;
let resultado;

//tomar datos por ID

numeroUno = document.getElementById("txtIdNumeroUno").value;
numeroDos = document.getElementById("txtIdNumeroDos").value;

//transformarlos a enteros
numeroUno = parseInt(numeroUno);
numeroDos = parseInt(numeroDos);


//operacion

resultado = numeroUno + numeroDos;


//mostrar resultado

	alert("El resultado es " + resultado);



}

/*

el parseo "parseInt()"" se utiliza cuando le pedimos datos al usuario



-ENTRADAS:
prompt();
document.getElementById("ID").value;
el ID siempre debe respetarse y copiarlo tal cual se muestra

-PROCESOS:
  operacion suma;

-SALIDAS:
alert("mensaje" o variable);
alert ("mensaje" y variable);
document.getElementById("ID").value;

//operadores aritmetricos
// + - * / %

//operadores realacionales o de comparacion
> < == >= <=

//operadores logicos
!(negacion) &&(Y o and) || (o - or)

*/