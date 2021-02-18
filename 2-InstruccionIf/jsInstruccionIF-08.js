/*Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/

function mostrar()
{
	//DECLARACION
	var edad;
	var estado;

	//ASIGNAR
	edad = parseInt(txtIdEdad.value);
	estado = estadoCivil.value;

	//SOLUCION
	if (edad > 17 && estado == "Soltero"){
		alert("Es soltero y no es menor.");
	}
}//FIN DE LA FUNCIÓN