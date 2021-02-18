/*Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.*/

function mostrar()
{
	//declaro
	var edadString;
	var edadNumber;


	//tomo la edad  
	edadString = txtIdEdad.value;
	edadNumber = parseInt(edadString);
	
	//función condicional y Solución
	if(edadNumber >= 18)
	{alert("Usted es mayor de edad");
	}


	//acá debería usar ELSE
	if (edadNumber <= 17) //si uso solamente el signo < SIN el signo = , no me da resultado !!!!!!!! :(
	{alert("Usted es menor de edad");
	}

}//FIN DE LA FUNCIÓN