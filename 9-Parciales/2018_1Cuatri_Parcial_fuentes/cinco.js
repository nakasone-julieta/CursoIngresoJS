/* Enunciado:
** Bienvenidos (SWITCH).
** Si es la tierra mostrar "acá vivimos".
** pedir el ingreso de un planeta del sistema solar
** Si está más cerca del sol, "acá hace más calor".
** Si está más lejos del sol, "acá hace más frio".
** Si no es un planeta valido informarlo.
** Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).*/
function mostrar()
{
    var acceso; 


    acceso = prompt ("indique un planeta del Sistema Solar. El mismo debe estar escrito en minúscula");

    switch (acceso)
    {
        case "mercurio":
        case "venus":
            alert ("acá hace más calor");
            break;
        
        case "tierra":
            alert ("acá vivimos");
            break;

        case "marte":
        case "jupiter":
        case "júpiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
        case "plutón":
            alert ("acá hace más frio");
            break;
        
        default:
            alert ("Usted no ingresó un planeta válido. Recuerde escribirlo en minúsculas");
            break;
    }


}
