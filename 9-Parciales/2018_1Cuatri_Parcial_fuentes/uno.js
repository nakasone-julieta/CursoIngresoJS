
function mostrar()
{
    //declaramos
    let ancho;
    let largo;
    let resultado;

    //asignamos y parcentamos
    ancho = prompt("ingrese el ancho");
    largo = prompt("ingrese el alto");

    ancho = parseInt(ancho);
    largo = parseInt(largo);

    resultado = ancho*largo;

    //mostramos solución
    alert ("el resultado es " + resultado);
}
