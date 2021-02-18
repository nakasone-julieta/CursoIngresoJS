/*Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
	//declaro
	var edadString;
	var edadNumber;

	//asigno
	edadString = txtIdEdad.value;
	edadNumber = parseInt(edadString);

	//condición y solución
	
	/*PODEMOS USAR NOT PARA NEGAR TODO LO ANTERIOR
	if (!(edadNumber >=13 && edadNumber <=17)){ 
		
	O PODEMOS USAR LA CONDICIÓN CONTRARIA A LO ANTERIOR, EL OR */	
	if (edadNumber <13 || edadNumber >17){
		alert ("Usted no es un adolescente");
	}


}//FIN DE LA FUNCIÓN