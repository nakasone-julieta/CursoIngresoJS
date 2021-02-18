/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//declarar
	let num1;
	let num2;
	let r;

	//asignamos
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	r = num1 + num2

	//soliucion
	alert(r);	
}

function restar()
{
	//declarar
	let num1;
	let num2;
	let r;
	
	//asignamos
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	r = num1 - num2
	
	//soliucion
	alert(r);	
	
}

function multiplicar()
{ 
	//declarar
	let num1;
	let num2;
	let r;

	//asignamos
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	r = num1 * num2

	//soliucion
	alert(r);	
	
}

function dividir()
{
	//declarar
	let num1;
	let num2;
	let r;

	//asignamos
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	r = num1 / num2

	//soliucion
	alert(r);	
	
}

