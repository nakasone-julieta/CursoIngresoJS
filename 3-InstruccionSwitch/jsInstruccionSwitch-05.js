/* Enunciado:
** Al ingresar una hora, informar:
** si está entre las 7 y las 11 : "Es de mañana.".
*/

function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	var horaDelDiaParseado

	horaDelDiaParseado = parseFloat(horaDelDia);

	switch (horaDelDiaParseado) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert ("es de mañana");			
			break;
	
		default:
			alert ("usted no ingresó un valor entero entre 7 y 11");
			alert ("usted ingresó " + horaDelDiaParseado + ". Intente otro valor");
			break;
	}
	
	



}//FIN DE LA FUNCIÓN