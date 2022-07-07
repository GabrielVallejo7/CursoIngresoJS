/*
Gabriel Vallejo
DIV E
EJ 10 E/S

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//variables
	let importe;
	let descuento;
	let resultado;

	// tomar valor de ID
	importe = document.getElementById("txtIdImporte").value;


	//calcular el 25% de descuento
	descuento = (25/100) * importe;
	resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = resultado
	
	//alert("El importe con descuento es " + resultado);
}
