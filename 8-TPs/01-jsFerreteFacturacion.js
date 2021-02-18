/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //declarar
    var precio1;
    var precio1Parseado;
    var precio2;
    var precio2Parseado;
    var precio3;
    var precio3Parseado;
    var resultadoSuma; 



    //asignar
    precio1 = txtIdPrecioUno.value; 
    precio1Parseado = parseFloat (precio1);

    precio2 = txtIdPrecioDos.value;
    precio2Parseado = parseFloat (precio2);

    precio3 = txtIdPrecioTres.value;
    precio3Parseado = parseFloat (precio3);

    resultadoSuma = precio1Parseado + precio2Parseado + precio3Parseado;


    //solución
    alert ("Precio total " + resultadoSuma + " +IVA");

}
function Promedio () 
{
    //declarar
    var precio1;
    var precio1Parseado;
    var precio2;
    var precio2Parseado;
    var precio3;
    var precio3Parseado;
    var resultadoSuma;
    var resultadoPromedio;  



    //asignar
    precio1 = txtIdPrecioUno.value; 
    precio1Parseado = parseFloat (precio1);

    precio2 = txtIdPrecioDos.value;
    precio2Parseado = parseFloat (precio2);

    precio3 = txtIdPrecioTres.value;
    precio3Parseado = parseFloat (precio3);

    resultadoSuma = precio1Parseado + precio2Parseado + precio3Parseado;
    resultadoPromedio = resultadoSuma / 3;

    //solución
    alert ("Precio promedio " + resultadoPromedio);

	
}
function PrecioFinal () 
{
	//declarar
    var precio1;
    var precio1Parseado;
    var precio2;
    var precio2Parseado;
    var precio3;
    var precio3Parseado;
    var resultadoSuma;
    var iva;
    var resultadoFinal;  



    //asignar
    precio1 = txtIdPrecioUno.value; 
    precio1Parseado = parseFloat (precio1);

    precio2 = txtIdPrecioDos.value;
    precio2Parseado = parseFloat (precio2);

    precio3 = txtIdPrecioTres.value;
    precio3Parseado = parseFloat (precio3);

    resultadoSuma = precio1Parseado + precio2Parseado + precio3Parseado;
    iva = resultadoSuma * 21 / 100;

    resultadoFinal = resultadoSuma + iva;

    //solución
    alert ("Precio total " + resultadoFinal + "(IVA incluido)");

}