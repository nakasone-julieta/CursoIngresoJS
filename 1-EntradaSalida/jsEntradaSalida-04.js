/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// acá voy a pedir reserva en la memoria para el dato que voy a usar (dentro de NOMBRE)
	let nombre;

	//coloco una ventana emergente en prompt para guardar el nombre del usuario
	nombre = prompt("ingrese su nombre"); 

	//la cadena de NOMBRE aparecerá en la caja de texto embebida en la página
	document.getElementById("txtIdNombre").value = nombre; 

}

