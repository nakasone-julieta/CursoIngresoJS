<<<<<<< HEAD
/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
/* {	
	let nombre; 	
	let edad; 
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	alert("usted se llama " + nombre + " y tiene " edad + " años");
} 



ESTE NO FUNCIONA */


{	
	//declaraciones
	let nombre; 
	let edad; 
	/* OPCION 2 podemos agregar los mensajes: 
	let mensaje1 = "usted se llama ";
	let mensaje2 = "y tiene ";
	let mensaje3 = "años";
	*/

	//asignación
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;


	alert("usted se llama " + nombre + " y tiene" + edad + " años");
	/*OPCION 2 
	alert(mensaje1+nombre+mensaje2+edad+mensaje3); */
}

//TAMBIEN FUNCIONA CON:  alert(`Usted se llama ${nombre} y tiene ${edad}`);
=======
/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	alert("ok");
}

>>>>>>> a0cee3a710e9769e55f46ef39f53f24d0dda5f77
