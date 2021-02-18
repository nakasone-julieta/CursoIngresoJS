/*Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/

function mostrar()
{
	var numeroRandom;

	numeroRandom = Math.floor(Math.random()*100)+1;
	//Genero el número RANDOM entre 1 y 10 
	if (numeroRandom >0 && numeroRandom <11)
	{
		alert(numeroRandom);	
	}
}//FIN DE LA FUNCIÓN