/*
** Enunciado:
** al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
 */

function mostrar()
{
	var repetir;

	repetir = prompt ("¿cuantas veces queres que repitamos el mensaje secreto?");
	repetir = parseInt(repetir);

	for (var i = 1; i<= repetir; i=i+1)
	{
		alert ("Hola UTN FRA");
	
	}

}//FIN DE LA FUNCIÓN