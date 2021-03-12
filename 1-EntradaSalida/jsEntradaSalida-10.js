<<<<<<< HEAD
/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//declaro 
	let importeIngresado;
	let importeDescuento;
	let resultado;

	//asigno
	importeIngresado = txtIdImporte.value;
	importeIngresado = parseFloat(importeIngresado);

	importeDescuento = importeIngresado * 25 / 100;

	resultado = importeIngresado - importeDescuento;

	//solución
	txtIdResultado.value = resultado; 

}
=======
/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	alert("ok");
}
>>>>>>> a0cee3a710e9769e55f46ef39f53f24d0dda5f77
