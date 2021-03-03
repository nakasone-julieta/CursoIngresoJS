/*
** Enunciado:
** Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador; 
	var acumulador; //va a sumar
	var numeroIngresado;
	var numeroIngresadoParseado;
	var promedio;

	contador = 0;
	acumulador = 0;
	
	for (i=0; i<5; i++) //como hago para validar el dato ingresado ?
	{
		
		do
		{
		numeroIngresado = prompt ("ingrese un numero"); //esto sucede reiteradas veces
		numeroIngresadoParseado = parseInt(numeroIngresado);
		} while (isNaN(numeroIngresadoParseado));

		acumulador = acumulador + numeroIngresadoParseado;
		contador++;

		console.log("el numero ingresado es "+numeroIngresadoParseado);
		console.log("el ACUMULADOR es "+acumulador);
		console.log ("el controlador es " + contador);

	}
	txtIdSuma.value=acumulador;
	txtIdPromedio.value= acumulador/5;
	



}//FIN DE LA FUNCIÓN

