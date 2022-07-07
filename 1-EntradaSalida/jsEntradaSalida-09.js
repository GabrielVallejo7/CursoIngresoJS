/*
Gabriel Vallejo
DIV E
EJ 9 E/S

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//variable
	let sueldo;
	let aumento;
	let sueldoAumentado;

	// tomar valor de ID

	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo);

	//calcular el 10% del sueldo
	aumento = (10/100) * sueldo;
	sueldoAumentado = sueldo + aumento;

	//mostrar resultado
document.getElementById("txtIdResultado").value;

alert("Su sueldo es " + sueldo + " Su aumento es de " + aumento + " Y su sueldo aumentado es " + sueldoAumentado);

/*se parsea cuando se usan los numeros en cuentas  */
}
