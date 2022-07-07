/*
Gabriel Vallejo
DIV E
EJ 5 E/S

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//crear variable

	let nombreIngresado;
	let edadIngresada;

	//tomar datos por ID
	//donde guardo - que guardo

	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;

	//mostrar los datos
	//cada vez que querramos CONCATENAR una variable con un mensaje
	//usamos el simbolo +

	alert("Su nombre es " + nombreIngresado + " y su edad es " + edadIngresada);


}

/*

-ENTRADAS:
prompt();
document.getElementById("ID").value;
el ID siempre debe respetarse y copiarlo tal cual se muestra

-PROCESOS:


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
