/* 
Gabriel Vallejo
DIV E
Ej 4 E/S

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{
	//declarar variable

let nombre;

	//tomar datos o pedir nombre
	// donde guardo - que guardo

	nombre = prompt("ingrese su nombre");
	
	//inicializar variable

	document.getElementById("txtIdNombre").value = nombre;
	
	
}

/*acceder al valor de una caja de texto
document.getElementById("txtIdNombre").value = nombreIngresado;

perdirle un dato al usuario
nombre = prompt("ingrese su nombre");

mostrarle un dato al usuario
alert("Esto funciona de maravilla");

-ENTRADAS:
prompt();
document.getElementById("ID").value;
el ID siempre debe respetarse y copiarlo tal cual se muestra

-PROCESOS:


-SALIDAS:
alert("mensaje" o variable);
alert ("mensaje" y variable);


*/
