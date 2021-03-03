/*
** Enunciado:
** al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/

function mostrar()
{
	var numeroIngresado;
	var contador=0;

	numeroIngresado = parseInt(prompt("ingrese un numero así sabemos si es primo"));

	for (i=1 ; i<=numeroIngresado; i=i+1)
	{
		if (numeroIngresado%i == 0) //voy a conocer el resto de numero ingresado/i en cada una de las vueltas de iteración que haga la función
		{
			contador=contador+1; //voy a contar la cantidad de veces que el RESTO me dio 0
			if (contador == 2) // si sólo se cuentan 2 veces de RESTO=0, quiere decir que el numero es primooooooooo
			{
				alert("ES UN NUMERO PRIMOOOO!!!");
			}

		}
	}


}//FIN DE LA FUNCIÓN