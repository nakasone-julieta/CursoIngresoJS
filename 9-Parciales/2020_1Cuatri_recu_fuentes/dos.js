/* Enunciado:

** Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
** Tipo validad("arena";"cal";"cemento")
** Cantidad de bolsas,
** Precio por bolsa (más de cero ),
** al terminar la compra el cliente accede a un descuento segun las bolsas en total
** Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
** Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
** a) El importe total a pagar , bruto sin descuento y...
** b) el importe total a pagar con descuento(solo si corresponde)
** d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
** f) El tipo mas caro*/
function mostrar()
{
  var tipo; 
  var cantidad; 
  var cantidadParseado;
  var precio; 
  var precioParseado;
  var continuar;
  var cantidadTotal=0;
  var gastoTotal=0;
  var i=0;

  var gastoPorCarga;
  var descuento15Porciento;
  var descuento25Porciento;
  var flagDescuento15=false;
  var flagDescuento25=false;

  var cantidadMaxima;
  var tipoMaximo;

  var precioParseadoMaximo;
  var tipoPrecioMaximo;

  do
  {
    
    i++;
    tipo = prompt ("ingrese el artículo de la bolsa comprada: arena, cal, cemento").toLowerCase();
    while (tipo != "arena" && tipo != "cal" && tipo != "cemento")
    {
      tipo = prompt ("ERROR. Por favor ingrese el artículo válido: arena, cal, cemento").toLowerCase();
    }

    cantidad = prompt ("ingrese la cantidad de bolsas compradas");
    cantidadParseado = parseInt(cantidad);
    while (isNaN(cantidadParseado) || cantidadParseado < 1)
    {
      cantidad = prompt ("ERROR. Por favor ingrese un número mayor a 0");
      cantidadParseado = parseInt(cantidad);
    }

    precio = prompt ("ingrese el precio por bolsa");
    precioParseado = parseInt(precio);
    while (isNaN(precioParseado) || precioParseado < 1)
    {
      precio = prompt ("ERROR. Por favor ingrese un número mayor a 0");
      precioParseado = parseInt(precio);
    }

    continuar = confirm ("¿desea cargar otro artículo?")
    //::::::::::::::::::::::::::::::::: HASTA ACÁ ES LA ENTRADA DE DATOS DEL USUARIO :::::::::::::::::::::::::::::::::::::::://

//gasto por carga de producto
    gastoPorCarga=cantidadParseado * precioParseado;
//acumulo las cantidades y el gasto de la compra   
    cantidadTotal = cantidadTotal+cantidadParseado;
    gastoTotal = gastoTotal+gastoPorCarga;

//si cantidad parseado es >10 hacemos descuento de 0.85 sino si cantidad parseado es >30 hacemos descuento de 0.75
    if (cantidadTotal > 30)
    {
      flagDescuento15 =false;
      flagDescuento25 =true
      
      descuento25Porciento = gastoTotal * 0.75; 
    }
    else if (cantidadTotal > 10)
    {
      flagDescuento15 =true;
      descuento15Porciento = gastoTotal * 0.85;
    }

//d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
    if (i==1 || cantidadParseado > cantidadMaxima)
    {
      cantidadMaxima = cantidadParseado;
      tipoMaximo = tipo; 
    }

//f) El tipo mas caro.
    if (i==1 || precioParseado > precioParseadoMaximo)
    {
      precioParseadoMaximo = precioParseado;
      tipoPrecioMaximo = tipo;
    }

    /*
    console.log("tipo: "+tipo);
    console.log("cantidad: "+cantidadParseado);
    console.log("precio: "+precioParseado);
    console.log("iteraciones: "+i);
    console.log("cantidad Total: "+cantidadTotal);
    console.log("gasto por carga de producto: "+gastoPorCarga);
    console.log("gasto Total: "+gastoTotal);
    console.log("descuento15: "+descuento15Porciento);
    console.log("descuento25: "+descuento25Porciento);
    console.log("cantidadMaxima: "+cantidadMaxima);
    console.log("tipoMaximo: "+tipoMaximo);
    */
  }while (continuar==true); //fin de la iteración

  //:::::::::::::::::::::::::RESPUESTAS::::::::::::::::::://
  //a)
  document.write ("<h2> a) </h2> su importe total es $<h3>"+ gastoTotal + "</h3><br>");

  //b)
  if (flagDescuento15 == true)
  {
    document.write ("<h2> b) </h2>su importe con descuento es $<h3>"+descuento15Porciento+ "</h3><br>");
  }
  else if (flagDescuento25 == true)
  {
    document.write ("<h2> a) </h2>su importe con descuento es $<h3>"+flagDescuento25+ "</h3><br>");
  }

  //d)
  document.write ("<h2> d) </h2>el artículo con mayor cantidad de bolsas compradas es <h3>"+ tipoMaximo + "</h3> con una compra de <h3>"+ cantidadParseado + "</h3>de bolsas"+ "<br>");
  
  //f)
  document.write ("<h2> f) </h2>el artículo más caro ingresado es <h3>"+ tipoPrecioMaximo + "</h3> de $<h3>" + precioParseadoMaximo+"</h3>");



}
