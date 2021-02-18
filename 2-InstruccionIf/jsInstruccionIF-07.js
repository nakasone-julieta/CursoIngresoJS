function mostrar()
{
	//DECLARACION
	var edad;
	var estCivil;

	//ENTRADA
	edad = parseInt(txtIdEdad.value);
	estCivil = estadoCivil.value;

	//PROCESO
	if (edad < 18 && estCivil != "Soltero")
	{
		//SALIDA
		alert("Es muy pequeño para NO ser soltero.");
	}

}//FIN DE LA FUNCIÓN