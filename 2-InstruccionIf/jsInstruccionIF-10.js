/*Enunciado:
**Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
**"EXCELENTE" para notas igual a 9 o 10,
**"APROBÓ" para notas mayores a 4,
**"Vamos, la proxima se puede" para notas menores a 4
*/



function mostrar()
{
	//declaro
	var numeroRandom;
	
	//asigno
	numeroRandom = Math.round(Math.random()*9+1);  //Genero el número RANDOM entre 1 y 10 
	
	
	//CONDICIONAL Y SOLUCIÓN
	alert(numeroRandom);	//éste es cómo lo pensé primero
	if (numeroRandom >8)
	{
		alert("EXCELENTE");
	}
	else 
	{
		if (numeroRandom >4)
		{
			alert ("APROBÓ");
		}

		else
		{
			alert ("Vamos, la proxima se puede");
		}
	}
	
	
	
	
	/* ÉSTE ESTÁ ORDENADO SEGÚN CANTIDAD DE POSIBILIDADES EN IF
	alert(numeroRandom);
	if (numeroRandom <9 && numeroRandom >4) //MAYORES POSIBILIDADES DE RTA
	{
		alert("APROBÓ");
	}
	else 
	{
		if (numeroRandom <4)
		{
			alert ("Vamos, la proxima se puede");
		}

		else
		{
			alert ("EXCELENTE"); //SOLO 2 RTAS POSIBLES
		}
	}

	*/
	
	
	/*else //ESTE NO ME FUNCIONABA
	{
		if (numeroRandom >4);
		{
			alert ("aprobo");
		}
	
		else
		{
			alert("Vamos, la proxima se puede");
		}
	}*/

}//FIN DE LA FUNCIÓN