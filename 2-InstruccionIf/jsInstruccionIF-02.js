/*Enunciado:
Al ingresar una edad debemos informar solo si la persona es mayor de edad */

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

	if (edadNumber < 18)
	{alert("Disfrutá tu infancia :D ");
	}

	if(edadNumber >= 100)
	{alert("....dudoso");
	}
	

}//FIN DE LA FUNCIÓN