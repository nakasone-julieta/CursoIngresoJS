/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/




function mostrar()
{
	var controlador;
	controlador=prompt ("ingrese la clave de ayuda"); 
	
	while (controlador != "utn750")
	{
		alert ("Su clave de ayuda está mal ingresada. Si no vuelve a intentarlo, morirá en un loop infinito..");
		controlador = prompt("ingrese la clave de ayuda")
	}
	alert("Se salvó del loop..");
	alert("No por mucho tiempo Ò____ó");

}


