/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. //acumuladorNegativos
2-Suma de los positivos. //acumuladorPositivos
3-Cantidad de positivos. //contadorPositivos
4-Cantidad de negativos. //contadorNegativos
5-Cantidad de ceros. ******a qué refiere?*****
6-Cantidad de números pares. //contadorPares
//los muestro en un console log
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	var numeroIngresado;
	var numeroIngresadoParseado;
	var acumuladorPositivos=0;
	var contadorPositivos=0;
	var acumuladorNegativos=0;
	var contadorNegativos = 0;
	var resto;
	var contadorPares=0;
	var continuar;

	//sucede reiteradas veces
	
	do{

		do //voy a pedir un DATO y lo valido con isnan
		{
			numeroIngresado = prompt("ingrese un numero");
			numeroIngresadoParseado = parseInt (numeroIngresado);
		}while (isNaN (numeroIngresadoParseado));
		
			resto = numeroIngresadoParseado %2;


			if (numeroIngresadoParseado >= 0) // entran los números positivos
			{
				acumuladorPositivos = acumuladorPositivos + numeroIngresadoParseado; //******me da NaN
				contadorPositivos = contadorPositivos + 1;
			}
			else if (numeroIngresadoParseado < 0) //todos los negativos
			{
				acumuladorNegativos = acumuladorNegativos + numeroIngresadoParseado; //*****me da undefined
				contadorNegativos = contadorNegativos +1;
			}
			if (resto == 0) //a éste tiene que entrar sí o sí a pesar de las otras dos sentencias. Está bien que sea un if suelto?????
			{
				contadorPares = contadorPares+1;
			}
					
			console.log("numero ingresado " +numeroIngresadoParseado);
			console.log("cantidad de positivos " +contadorPositivos);
			console.log("suma de positivos " +acumuladorPositivos);
			
			console.log("cantidad de negativos " +contadorNegativos);
			console.log("suma de negativos " +acumuladorNegativos);
			console.log(" cantidad numeros pares " +contadorPares);

			continuar = confirm ("¿Desea agregar otro número?")


		} while (continuar == true); 
		
		//muestro los resultados   ******obvio, me da mal los resultados: NaN*******
		console.log ("el promedio de positivos ingresados es de " + acumuladorPositivos/contadorPositivos);
		console.log ("el promedio de negativos ingresados es de " + acumuladorNegativos / contadorNegativos);
		console.log ("la diferencia entre negativos y positivos es " + acumuladorPositivos-acumuladorNegativos)

		//document.write("la suma de negativos es :"+sumaNegativos);

		
	}//FIN DE LA FUNCIÓN

/*//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos); */