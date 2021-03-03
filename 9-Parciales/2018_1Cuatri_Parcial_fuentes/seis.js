/* Enunciado:
** Bienvenidos (SWITCH +IF).
** Se ingresa una hora.
** Si está entre las 6 y las 11 mostrar:"es de mañana",
** si es desde las 12 a las 19: "es de tarde",
** de lo contrario informar que es de noche.
** Informar si la hora no es válida.
** Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".
*/


function mostrar()
{
    var horaIngresada;

    horaIngresada = parseInt(laHora.value);
    if (horaIngresada > 5 && horaIngresada < 12)
    {
        alert ("es de mañana")
    }
    else
    {
        if (horaIngresada > 11 && horaIngresada <20)
        {
            alert ("es de tarde");
        }
        else 
        {
            if (horaIngresada > 19 && horaIngresada < 25)
            {
             alert ("a dormir");   
            }
            else
            {
                if (horaIngresada > 24)
                {
                    alert ("la hora ingresada no es válida");
                }
                else 
                {
                    alert ("es de noche");
                }
            }
        }
    }
       
        
        
 
}
 /* la hora es entre las 6 y las 11 = es de mañana
        if (horaIngresada > 5 && horaIngresada < 12)
        {
            alert("es de mañana");
        }
        // la hora no está entre las 6 y las 11 pero es menor a 20 = es de tarde
        else if (horaIngresada < 20)
        {
            alert ("es de tarde");
        }
        // la hora no está entre las 6 y las 20, pero es menor a 24 = a dormir
        else if (horaIngresada < 24);
        {
            alert ("a dormir");
        }
        
        
        // la hora no está entre las 6 y las 24 = es de noche*/