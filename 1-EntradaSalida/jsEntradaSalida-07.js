/*
Gabriel Vallejo
DIV E 
EJ 7 E/S

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	//variables
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
	alert("El resultado de la suma es: " + resultado);	
}

function restar()
{ //variables
	let numeroUno;
	let numeroDos;
	let resultado;

	//tomar datos por ID
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	//operacion
	resultado = numeroUno - numeroDos;

	//mostrar resultado
	alert("El resultado de la resta es: " + resultado);
}

function multiplicar()
{ //variables
	let numeroUno;
	let numeroDos;
	let resultado;

	//tomar datos por ID
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	//operacion
	resultado = numeroUno * numeroDos;

	//mostrar resultado
	alert("El resultado de la multiplicacion es: " + resultado);
	
}

function dividir()
{//variables
	let numeroUno;
	let numeroDos;
	let resultado;

	//tomar datos por ID
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	//operacion
	resultado = numeroUno / numeroDos;

	//mostrar resultado
	alert("El resultado de la division es: " + resultado);
	
}

