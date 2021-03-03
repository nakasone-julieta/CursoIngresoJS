/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var numeroIngresadoParseado;
	var acumulador=0;
	var continuar;

	do{
		do
		{
		numeroIngresado = prompt ("ingrese un numero");
		numeroIngresadoParseado = parseInt(numeroIngresado);
		}while (isNaN(numeroIngresadoParseado)); //con éste valido el valor ingresado por el usuario
	
	acumulador = acumulador + numeroIngresadoParseado;
	continuar = confirm("¿Desea agregar otro número?");

	}while (continuar == true);

	txtIdSuma.value= acumulador;
	txtIdPromedio.value = acumulador/5;

	
}//FIN DE LA FUNCIÓN