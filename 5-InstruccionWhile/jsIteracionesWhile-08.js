/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var numeroIngresadoParseado;
	var acumulador=0;
	var multiplicador=1;
	var continuar;
	var resto;

	do
	{
		do
			{
			numeroIngresado = prompt ("ingrese un numero");
			numeroIngresadoParseado = parseInt(numeroIngresado);
			}while (isNaN(numeroIngresadoParseado)); //no pasa el programa si no ingresó un numero o sea si numeroIngresadoParseado !=isNaN

		if (numeroIngresadoParseado >= 0)
		{
			acumulador = acumulador + numeroIngresadoParseado;
		}
		else 
		{
			multiplicador = multiplicador * numeroIngresadoParseado;
		}
		console.log("el ACUMULADOR es "+ acumulador);
		console.log ("el multiplicador es " + multiplicador);
		
		continuar = confirm("¿Desea agregar otro número?");

	}while (continuar == true);

	txtIdSuma.value= acumulador;
	txtIdProducto.value = multiplicador;

}//FIN DE LA FUNCIÓN