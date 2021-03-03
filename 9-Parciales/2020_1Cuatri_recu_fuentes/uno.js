/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio, <br>
			de cada una debo obtener los siguientes datos: <br>
			el tipo de producto (validar "barbijo" , "jabón" o "alcohol") , <br>
			el precio (validar entre 100 y 300),<br>
			la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
			 la Marca y el fabricante. <br>
			Se debe Informar al usuario lo siguiente:<br>

			a) Del más caro de los jabones, la cantidad de unidades y el fabricante<br>
			b) Del tipo de producto con más unidades en total de la compra, el promedio por compra <br>
			c) Cuántas unidades de Barbijos se compraron en total
*/
function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var precioProductoParseado;
	var cantidadProducto;
	var cantidadProductoParseado;
	var marcaProducto;
	var fabricanteProducto;
	var i; 
	
	//::soluciones::
	var flagJabon=true;
	//punto a)
	var precioMasCaroJabon;
	var cantidadMasCaroJabon;
	var fabricanteMasCaroJabon;
	//punto b)
	var promedioDelMayor;
	var masUnidadesProducto;
	var masUnidadesPrecio;
	var masUnidadesTipo;
	//punto c)
	var contadorCantidadBarbijo=0;

	alert ("usted deberá ingresar 5 productos con sus respectivos datos");
	for (i=1; i<=5; i++)
	{		
		do{
			tipoProducto= prompt("tipo de producto: barbijo, jabón, alcohol").toLowerCase();
		}while (tipoProducto != "barbijo" &&  tipoProducto != "jabón"  && tipoProducto != "alcohol" );
		
		do{
			precioProducto= prompt("inserte el precio");
			precioProductoParseado = parseInt(precioProducto);
		}while (isNaN(precioProductoParseado) || precioProductoParseado <100 || precioProductoParseado > 300);
		
		do{
			cantidadProducto= prompt("cantidad");
			cantidadProductoParseado = parseInt (cantidadProducto);
		}while (isNaN(cantidadProductoParseado) || cantidadProductoParseado <1 || cantidadProductoParseado > 1000);
		
		do{
			marcaProducto= prompt("marca");
		}while (isNaN(marcaProducto)== false || marcaProducto == " ");
		
		do{
			fabricanteProducto = prompt("fabricante");
		}while (isNaN(fabricanteProducto) == false || fabricanteProducto == " ");
		
		console.log ("TIPO de producto: " + tipoProducto);
		console.log ("PRECIO de producto: " + precioProductoParseado);
		console.log ("CANTIDAD de producto: " + cantidadProductoParseado);
		console.log ("MARCA de producto: " + marcaProducto);
		console.log ("FABRICANTE de producto: " + fabricanteProducto);
		console.log ("bucle: " +i);
		alert ("producto " + i + " ingresado correctamente");
		
		//a) Del más caro de los jabón, la cantidad de unidades y el fabricante
		if (tipoProducto == "jabón")
		{
			if (flagJabon == true)
			{
				precioMasCaroJabon = precioProductoParseado;
				cantidadMasCaroJabon = cantidadProductoParseado; //guardar el primer ingreso
				fabricanteMasCaroJabon = fabricanteProducto;    //guardar el primer ingreso
				flagJabon = false;//ya inicialicé una sola vez
			}
			else if(precioProductoParseado > precioMasCaroJabon) //almaceno los datos del jabón mas caro
			{
				console.log ("fabricante del producto " + fabricanteProducto);
				fabricanteMasCaroJabon = fabricanteProducto; //*****da UNDEFINED
				console.log("fabricante más caro del jabón " + fabricanteMasCaroJabon);
				
				precioMasCaroJabon = precioProductoParseado; //*****da UNDEFINED
				cantidadMasCaroJabon = cantidadProductoParseado; //*****da UNDEFINED
			}	
		}	
		
		//b) Del tipo con mas unidades, el promedio por compra
		if (i == 1)// es la primera vez, la primera vuelta
		{
			masUnidadesProducto = cantidadProductoParseado;
			//inicializar las variables que uso en el siguiente !!!!
			masUnidadesPrecio = precioProductoParseado;
			masUnidadesTipo = tipoProducto;
		}
			
		else if (cantidadProductoParseado > masUnidadesProducto) //siempre va EL NUMERO INGRESADO y luego la variable que quiero comparar. Esto va fuera del If porque sino no entraría nunca
		{
			masUnidadesProducto = cantidadProductoParseado;
			masUnidadesPrecio = precioProductoParseado;
			masUnidadesTipo = tipoProducto;
		}
		
		//c) Cuántas unidades de barbijos hay en total
		if (tipoProducto == "barbijo")
		{
			contadorCantidadBarbijo = contadorCantidadBarbijo + cantidadProductoParseado;
		}

	}

	//::::::::::::::::::: SOLUCIONES ::::::::::::::::::://
//a)
if (flagJabon == false)/*que pasa si no hay jabones cargados?*/
{
	document.write ("no se ha ingresado jabón <br>");
}
else{
	document.write ("el jabón más caro es "+fabricanteMasCaroJabon+ " con un precio de $" +precioMasCaroJabon + " y hay "+cantidadMasCaroJabon + " unidades <br>");
}

//b) 
document.write ("el promedio por compra del tipo con más unidades es" + masUnidadesPrecio/masUnidadesProducto + "el producto es" + masUnidadesTipo +"<br>");

//c)
document.write("la cantidad de unidades de barbijo es "+ contadorCantidadBarbijo+ " en total <br>");

document.write ("final del ejercicio :D <h1>gracias</h1>");
}