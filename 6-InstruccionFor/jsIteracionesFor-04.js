/*
** Enunciado:
** al presionar el botón, repetir hasta que utilizamos 'BREAK'.
*/
function mostrar()
{
	var repetir;

	repetir = prompt ("¿cuántas veces iteramos el mensaje hasta usar BREAK?");
	repetir = parseInt(repetir);

	for (var i = 1; i <= repetir; i=i+1)
	{
		alert ("Hola UTN FRA");
		if (i == repetir)
		{
			alert("salió del mensaje infinito");
			break;
		}

	
	}

}//FIN DE LA FUNCIÓN