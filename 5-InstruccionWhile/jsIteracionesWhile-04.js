/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	var numeroIngresadoParseado;

	numeroIngresado = prompt ("sólo hay 9 números que lo salvarán del loop. Que comience el juego");
	numeroIngresadoParseado = parseInt (numeroIngresado);
	
	while (numeroIngresadoParseado < 0 || numeroIngresadoParseado > 9 || isNaN(numeroIngresadoParseado))
	{
	numeroIngresadoParseado = prompt("Usted continúa en el loop, aún puede salvarse");
		
	}
	txtIdNumero.value=("Felicidades! Con '" + numeroIngresadoParseado +  "' ha sido liberado nuevamente");
	

}//FIN DE LA FUNCIÓN

/* var numeroIngresado;
	var numeroIngresadoParseado;
	
	numeroIngresado = prompt("sólo hay 9 números que lo salvarán del loop. Que comience el juego");
	numeroIngresadoParseado = parseInt(numeroIngresado);
	if (numeroIngresadoParseado > 0 && numeroIngresadoParseado < 10)
	{
		txtIdNumero.value = numeroIngresadoParseado;
	}
	alert ("su numero es incorrecto");
	*/

	/*numeroIngresadoParseado < 0      numeroIngresadoParseado > 9      numeroIngresadoParseado != NaN
	-3     v                                  f                                 V                          V
	l      f                                  f                                 f                          f
	5      f                                  f                                 v                          v


	numeroIngresadoParseado < 0      numeroIngresadoParseado > 9      numeroIngresadoParseado == NaN
	-3     v                                  f                                 f                          f
	l      f                                  f                                 v                          v
	5      f                                  f                                 f                          f


	isNaN*/