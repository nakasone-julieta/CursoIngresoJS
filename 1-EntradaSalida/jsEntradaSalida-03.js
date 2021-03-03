/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;
	nombre = document.getElementById("txtIdNombre").value; //esto es una forma nativa para para buscar elementos en el html (información del dom)
	alert(nombre);
	document.getElementById("txtIdNombre").value = ""; //con ésta línea hago que lo escrito en el cuadro de texto se borre inmeditamente después de presionar ACEPTAR en la ventanilla emergente

}
/* OTRA FORMA DE HACERLO
nombre=txtIdNombre.value;
el ID siempre tiene que ser exactamente igual al de HTML, es una clave */


