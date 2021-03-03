/*
** Enunciado:
** Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
** de cada una debo obtener los siguientes datos:
** el tipo (validar "barbijo" , "jabón" o "alcohol") ,
** el precio (validar entre 100 y 300),
** la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
** la Marca y el fabricante.
** Se debe Informar al usuario lo siguiente:
** a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
** b) Del tipo con mas unidades, el promedio por compra
** c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidadProducto;
	var marcaProducto;
	var fabricanteProducto;
	//::soluciones::
	var flag=true;
	//punto a)
	var precioMasBaratoAlcohol;
	var cantidadMasBaratoAlcohol;
	var fabricanteMasBaratoAlcohol;
	//punto b)
	var flag= "unidades1";
	var masUnidadesProducto;
	var masUnidadesPrecio;
	var masUnidadesTipo;
	//punto c)
	var acumuladorCantidadJabón=0;

	alert ("usted deberá ingresar 5 productos con sus respectivos datos");
	for (i=1; i<=5; i++)
	{		
		do{
			tipoProducto= prompt("tipo de producto: barbijo, jabón, alcohol").toLowerCase();
		}while (tipoProducto != "barbijo" &&  tipoProducto != "jabón"  && tipoProducto != "alcohol" );
		
		do{
			precioProducto= prompt("inserte el precio").toLowerCase();
		}while (precioProducto <100 || precioProducto > 300 || isNaN(precioProducto));
		
		do{
			cantidadProducto= parseInt(prompt("cantidad"));
		}while (cantidadProducto <1 || cantidadProducto > 1000 || isNaN(cantidadProducto));
		
		do{
			marcaProducto= prompt("marca");
		}while (!isNaN(marcaProducto));
		
		do{
			fabricanteProducto = prompt("fabricante");
		}while (!isNaN(fabricanteProducto));
		
		console.log ("TIPO de producto " + tipoProducto);
		console.log ("PRECIO de producto " + precioProducto);
		console.log ("CANTIDAD de producto " + cantidadProducto);
		console.log ("MARCA de producto " + marcaProducto);
		console.log ("FABRICANTE de producto " + fabricanteProducto);
		console.log ("bucle " +i);
		alert ("producto " + i + " ingresado correctamente");
		
		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
		if (tipoProducto == "alcohol")
		{
			if (flag = true)
			{
				precioMasBaratoAlcohol=precioProducto;
				cantidadMasBaratoAlcohol = cantidadProducto;
				fabricanteMasBaratoAlcohol = fabricanteProducto;
				flag = false;//ya inicialicé una sola vez
			}
			else if(precioProducto > precioMasBaratoAlcohol) //almaceno los datos del alcohol mas barato
			{
				precioMasBaratoAlcohol = precioProducto;
				cantidadMasBaratoAlcohol = cantidadProducto;
				fabricanteMasBaratoAlcohol = fabricanteProducto;//***********ME APARECE UNDEFINED :(
			}	
		}	
		//b) Del tipo con mas unidades, el promedio por compra
		if (flag == "unidades1")
		{
			masUnidadesProducto = cantidadProducto;
			flag = "listo unidades";
			
			if (masUnidadesProducto< cantidadProducto)
			{
				masUnidadesProducto = cantidadProducto;
				masUnidadesPrecio = precioProducto;
				masUnidadesTipo = tipoProducto;
			}
		}
		//c) Cuántas unidades de jabones hay en total
		if (tipoProducto == "jabón")
		{
			acumuladorCantidadJabón = acumuladorCantidadJabón + cantidadProducto;
		}

	}

	//::::::::::::::::::: SOLUCIONES ::::::::::::::::::://
//a)
document.write ("el alcohol más barato es "+fabricanteMasBaratoAlcohol+ " con un precio de $" +precioMasBaratoAlcohol + "y hay "+cantidadMasBaratoAlcohol + "unidades <br>");

//b) 
document.write ("el promedio por compra del tipo con más unidades es" + masUnidadesPrecio/masUnidadesProducto + "el producto es" + masUnidadesTipo +"<br>");

//c)
document.write("la cantidad de unidades de jabón es "+ acumuladorCantidadJabón+ " en total");

document.write ("final del ejercicio :D <h1>gracias</h1>");
}