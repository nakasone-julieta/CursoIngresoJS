<<<<<<< HEAD
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declaramos
	let dividendo;
	let divisor;
	let r;

	//asignamos
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	dividendo = parseInt(dividendo);
	divisor = document.getElementById("txtIdNumeroDivisor").value;
	divisor = parseInt(divisor);
	r = dividendo % divisor;

	//solucion
	
	alert("El resto es" + r);
}


/* % OPERADOR MODULO sirve para mostrarnos cuál es el resto de la divición para saber si podemos seguid dividiendo (dejando coma)

r = dividendo % divisor /// resto de división
rDivision = dividendo / divisor ///// esto es una división




*/
=======
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	alert("ok");
}
>>>>>>> a0cee3a710e9769e55f46ef39f53f24d0dda5f77
