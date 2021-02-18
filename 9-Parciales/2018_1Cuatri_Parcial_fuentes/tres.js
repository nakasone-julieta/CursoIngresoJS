function mostrar()
{
    //declaro
    let precioIngresado;
    let numIngresado2;
    let numIngresado2Porcentual;
    let precioFinal;

    //asigno (y parseo)
    precioIngresado = parseInt(prompt("ingrese el precio"));
    numIngresado2 = parseInt(prompt("ingrese el porcentaje de descuento"));
    
    numIngresado2Porcentual = precioIngresado * numIngresado2 / 100;

    precioFinal = precioIngresado - numIngresado2Porcentual;

    //solución
    elPrecioFinal.value = precioFinal;

}
/* !!!!!!!!!
Recordar que se tiene que discriminar el numeroString y el Numero Parceado para evitar problemas futuros
*/