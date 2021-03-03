/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var numeroIngresado;
	var numeroIngresadoParseado;

	var numeroMaximo;
	var numeroMinimo;

	var continuar;
	var flag=true;

	//reiteradas veces
	
		do
		{
			do
			{
				numeroIngresado = prompt ("ingrese un numero cualquiera");
				numeroIngresadoParseado = parseInt (numeroIngresado);
				console.log("numero ingresado " +numeroIngresadoParseado);
			}while (isNaN(numeroIngresadoParseado));

				if(flag==true)
				{
					numeroMaximo=numeroIngresadoParseado;
					numeroMinimo=numeroIngresadoParseado;
					flag=false;
				}

				else if (numeroIngresadoParseado > numeroMaximo) // me aparece undefined el numero maximo
				{
					numeroMaximo = numeroIngresadoParseado;	
				}
								
				else if (numeroIngresadoParseado < numeroMinimo) //si le saco el punto y coma me aparece undefined tambien el numero minimo
				{
					numeroMinimo = numeroIngresadoParseado;
				}
				continuar = confirm ("¿desea agregar otro número?");

				
				console.log("numero maximo " +numeroMaximo);
				console.log("numero minimo " +numeroMinimo);

		} while (continuar == true );

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;

	
}//FIN DE LA FUNCIÓN

/* declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
	*/