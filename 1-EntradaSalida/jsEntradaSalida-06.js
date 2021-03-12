<<<<<<< HEAD
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
function sumar()
{ 
	declaramos
	let numero1;
	let numero2;
	let suma; 
	let numero1Parceado;
	let numero2Pareceado; 

	asignamos las variables
	numero1=document.getElementById("txtIdNumeroUno").value;
	numero2=document.getElementById("txtIdNumeroDos").value;
	
	transformar en enteros
	numero1Parceado = parceInt(numero1);
	numero2Pareceado = parceInt(numero2);

	
	suma = numero1Parceado + numero2Pareceado;

	alert("sumemos " + numero1 + " y" + numero2 + " años");
	alert("el resultado es " + suma); */
	
function sumar()
{
    // declaramos
    var PrimerN ;
    var SegundoN ;
    var Sumadelosdos ;
    var numerounoparseado ;
    var numerodosparseado ;
	
	//asignar
    PrimerN = txtIdNumeroUno.value ;
    SegundoN = txtIdNumeroDos.value ;
	
	//transformar en enteros
    numerounoparseado = parseInt (PrimerN) ;
    
    numerodosparseado = parseInt (SegundoN) ;
    suma = (numerounoparseado + numerodosparseado) ;
    alert ("La suma es " + suma ) ;

}

=======
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	alert("ok");
}

>>>>>>> a0cee3a710e9769e55f46ef39f53f24d0dda5f77
