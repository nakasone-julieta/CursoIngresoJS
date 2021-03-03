/*
** Enunciado:
** al presionar el botón pedir un número. 
** Mostrar los numeros divisores desde el 1 al número ingresado
** y mostrar la cantidad de numeros divisores encontrados.
*/
function mostrar()
{
	var numeroIngresado;
	var contador=0;
	var divisores;

	numeroIngresado = prompt("ingrese un numero porque tengo ganas");
	numeroIngresado = parseInt(numeroIngresado);


	document.write ("Los números divisores del número ingresado, analizando a partir del 1 son:")
	for (var i=1 ; i <= numeroIngresado ; i=i+1)
	{
		if(numeroIngresado%i==0) // si el num ingresado dividido el número correspondiente a la iteración actual es == 0 => es el valor de i es divisor del num ingresado
		{
			document.write(i + ", ");
			contador = contador+1;	
		
		}
	}
	document.write("Y la cantidad de divisores encontrados en ese rango es: " + contador);
	
}//FIN DE LA FUNCIÓN