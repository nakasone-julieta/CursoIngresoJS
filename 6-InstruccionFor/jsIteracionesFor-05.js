/*
** Enunciado:
** al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/

function mostrar()
{
	var repetir;

	for (var i = 1; i != repetir; i=i+1)
	{
		repetir = prompt("Ingrese un número cualquiera. Le recomiendo que sea el '9' "); //esto va adentro  porque desde la primera vez, ya comienzo a repetir
		repetir = parseInt(repetir);

		if (repetir == 9)
		{
			break;
		}	
	}

}//FIN DE LA FUNCIÓN