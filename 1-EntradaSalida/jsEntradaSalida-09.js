<<<<<<< HEAD
/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
/*{
	//declaramos
	let sueldo;
	let resultado; 


	//asignamos
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	resultado = sueldo + 10%


	alert(resultado);
}TODO ESTO NO VA*/


{
	let sueldo; 
	let aumento; 
	let sueldoResultado;

	sueldo = txtIdSueldo.value;
	sueldo = parseFloat(sueldo);

	aumento = sueldo * 10 / 100;
	sueldoResultado = sueldo + aumento;

	txtIdResultado.value = sueldoResultado;

}
=======
/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	alert("ok");
}
>>>>>>> a0cee3a710e9769e55f46ef39f53f24d0dda5f77
