/*
Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/

function mostrar()
{
	//tomo el mes
	var mesDelAño = txtIdMes.value;
	// var invierno;
	//alert(mesDelAño);

	// invierno = ((txtIdMes.value)== "Julio");

	switch (mesDelAño) 
	{
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
			break;
		case "Septiembre":
		case "Octubre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		default:
			alert ("aún falta para el invierno");
			break;
	}




}//FIN DE LA FUNCIÓN