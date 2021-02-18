/* Enunciado:
** una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y
** localidad para vacacionar para poder calcular el precio final

** en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

** en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

** en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
		var estacionIngresada;
		var destinoIngresado;
		var porcentajeDiferencia;
		var precioFinal;
		var estadiaBase= 15000;

		estacionIngresada =txtIdEstacion.value;
		destinoIngresado =txtIdDestino.value;
	
		porcentajeDiferencia = 1.2; //éste número variará según se requiera => 0.x para descuento & 1.x para aumento
		
	
		switch (estacionIngresada) 
		{
			case "Invierno":
				switch (destinoIngresado)
				{
					case "Bariloche":				
						break;
					case "Cordoba":
					case "Cataratas":
						porcentajeDiferencia = 0.9;
						break;
					case "Mar del plata":
						porcentajeDiferencia = 0.8;
						break;
				}
			break;	
	
		
	
			case "Verano": //me muestra mal el resultado
				switch (destinoIngresado)
				{
					case "Bariloche":
						porcentajeDiferencia = 0.8; 
						break;
					case "Cordoba":
					case"Cataratas":
						porcentajeDiferencia = 1.1;
						break;
					case "Mar del plata":
						porcentajeDiferencia = 1.2;
						break;
				}
			break;
			
			case "Otoño":
			case "Primavera":
				switch (destinoIngresado)
				{
					case "Bariloche":
						porcentajeDiferencia = 1.1;
						break;
					case"Cataratas":
						porcentajeDiferencia = 1.1;
						break;
					case "Mar del plata":
						porcentajeDiferencia = 1.1;
						break;
				}
			break;
		}
		precioFinal = estadiaBase * porcentajeDiferencia; //cuenta para el precio final con aumento o descuento
		alert (precioFinal);


}