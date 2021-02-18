/*Enunciado:
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) */

function mostrar()
{
	//declaro
	var edadString;
	var edadNumber;

	//asigno
	edadString = txtIdEdad.value;
	edadNumber = parseInt(edadString);

	//condición y solución
	if (edadNumber >=13 && edadNumber <=17){
		alert ("Usted es un adolescente");
	}


}//FIN DE LA FUNCIÓN