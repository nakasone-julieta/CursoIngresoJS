/*ENUNCIADO
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita". */

function mostrar()
{
	//declaro
	var edadString;
	var edadNumber;

	//tomo la edad  
	edadString = txtIdEdad.value;
	edadNumber = parseInt(edadString);
	//función condicional

	if(edadNumber == 15)
	{
		alert("Niña Bonita");
	}
	if (edadNumber != 15)
	{
		alert("Usted no es Niña Bonita :( ");
	}
	
}//FIN DE LA FUNCIÓN