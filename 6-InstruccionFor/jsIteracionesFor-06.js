/*
** Enunciado:
** al presionar el botón pedir un número.
** mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
*/
function mostrar()
{
	var numeroIngresado;
	var contador=0;

	numeroIngresado = prompt("ingrese un numero porque tengo ganas");
	numeroIngresado = parseInt(numeroIngresado);

	document.write ("Los números pares entre 1 y el número ingresado son:")
	for (var i=1 ; i <= numeroIngresado ; i=i+1)
	{
		if(i%2==0) // entran solamente los numeros pares
		{
			document.write(i + ", "); //como tiene que contar mientras está en el buble, va dentro del bucle
			contador = contador+1;	
		
		}
	}
	document.write("Y la cantidad de números pares encontrados en ese rango es: " + contador);
	
}//FIN DE LA FUNCIÓN

