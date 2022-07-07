/*
Gabriel Vallejo
DIV E 
EJ 8 E/S

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

function SacarResto()
{ //variables
	let dividendo;
	let divisor;
	let resultado;
	let resto;

//tomar datos por ID
dividendo = document.getElementById("txtIdNumeroDividendo").value;
divisor = document.getElementById("txtIdNumeroDivisor").value;

//operaccion
dividendo = parseInt(dividendo);
divisor = parseInt(divisor);

resultado = dividendo / divisor;
resultado = parseInt(resultado)
resto = dividendo % divisor;

//mostrar resultado
	alert("El resultado es: " + resultado + " y el resto es " + resto); 
}

//se parsea el resultado para que redondee el numero
//para mostrar cuantas decimales muestre se usa 
//resultado.toFixed(2), en parentesis la cantidad de decimales