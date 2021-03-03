/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{	var codigoIngresado;
	
	codigoIngresado = prompt("ingrese su género binario");
	codigoIngresado = codigoIngresado.toLowerCase(); //para hacer que el caracter ingresado se transforme en minuscula


	while (codigoIngresado != "f" && codigoIngresado != "m" )
	{
		codigoIngresado = prompt("género incorrecto. Ingrese un género binario F= femenino // M= masculino");
		
	}
	//es imposible que pase a la linea 17 sin haber ingresado una respuesta correcta en el while
	if (codigoIngresado == "f")
	{
		txtIdSexo.value= ("usted ingresó género Femenino");
	}
	else
	{
		txtIdSexo.value= ("usted ingresó género Masculino");
	}
	
}//FIN DE LA FUNCIÓN

/*function mostrar(){
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
​
	while (!(numeroIngresado>=0&&numeroIngresado<10)){
		numeroIngresado = prompt("No ingreso un numero que se encuentre entre 0 y 9")
	}
	txtIdNumero.value=("Su numero es " + numeroIngresado)
	
}*/

