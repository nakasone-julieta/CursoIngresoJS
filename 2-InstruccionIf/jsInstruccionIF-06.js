/*Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */


function mostrar()
{
//declaro
	var edadString;
	var edadNumber;


	//tomo la edad  
	edadString = txtIdEdad.value;
	edadNumber = parseInt(edadString);
	
	//función condicional y Solución
	/*if(edadNumber >= 18)
	{alert("Usted es mayor de edad");
	}

	if (edadNumber >=13 && edadNumber <=17){
		alert ("Usted es un adolescente");
	}

	if (edadNumber <13){
		alert ("Usted es un niño");
	}*/

	if(edadNumber >= 18)
	{
		alert("Usted es mayor de edad");
	}

	else 
	{
		if (edadNumber <13)
		{
			alert ("usted es un niño");
		}

		else
		{
			alert ("Usted es un adolescente");
		}
	}

}//FIN DE LA FUNCIÓN