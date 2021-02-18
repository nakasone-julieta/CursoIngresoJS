/* Enunciado:
** Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	switch (destinoIngresado) 
	{
		case "Bariloche":
			alert ("oeste");			
			break;
		case "Ushuaia":	
			alert ("sur");			
			break;
		case "Cataratas":
			alert ("norte");			
			break;
		case "Mar del Plata":	
			alert ("este");		
			break;
	}
	

}//FIN DE LA FUNCIÓN