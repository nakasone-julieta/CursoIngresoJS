/* Enunciado:
** Bienvenidos (SOLO WITCH).
** una empresa de viajes le solicita ingresar que continente le gustaria visitar
** y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
** Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
** Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
** Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
** cualquier otro continente tiene un recargo del 20%
*/

function mostrar()
{
    var destino; 
    var dias; 
    var diasParseado;
    const oferta = 100;
    var porsentajeDiferencia; 
    var porsentajeDiferenciaMedios; 
    var precioXdias; 
    var mediosDePago; 
    var precioFinal;

    dias = prompt ("Ingrese la cantidad de días de su viaje");
    diasParseado = parseInt (dias);
    destino = Marca.value;
    
    porsentajeDiferencia = 1; //este numero cambia según el enunciado
    precioXdias = diasParseado * oferta;
    
    //mediosDePago = prompt ("ingrese su medio de pago según corresponda (escriba tal cual se indica): débito, mercadoPago, efectivo, cualquier otro medio");
    porsentajeDiferenciaMedios = 1; //este numero cambia segun el enunciado

    switch (destino)
    {
        case "América":
            porsentajeDiferencia = 0.5;
            switch (mediosDePago)
            {
                case "débito":
                    porsentajeDiferenciaMedios = 0.9;                    
                    break;
                default:
                    alert ("los datos ingresados no son válidos")
                    break;
            }
        break

        case "África":
            porsentajeDiferencia = 0.4;
            switch (mediosDePago) {
                case "mercadoPago":
                case "efectivo":
                    porsentajeDiferenciaMedios = 0.85
                    break;
                default:
                    alert ("los datos ingresados no son válidos")
                    break;
            }
        break;
   
        case "Europa":
            porsentajeDiferencia = 0.8;
            switch (mediosDePago) {
                case "débito":
                    porsentajeDiferenciaMedios = 0.85;                    
                    break;
                case "mercadoPago":
                    porsentajeDiferenciaMedios = 0.9;
                    break;
                case "cualquier otro medio":
                    porsentajeDiferenciaMedios = 0.95;
                    break;
                default:
                    alert ("los datos ingresados no son válidos")
                    break;
            }
        break;
    
        default:
            porsentajeDiferencia = 1.2;
            break;
    }
    
    precioFinal = precioXdias * porsentajeDiferencia * porsentajeDiferenciaMedios;
    alert ("Usted viajará " + diasParseado + " días a " + destino + ". El costo de su viaje será " + precioFinal + " abonando con " + mediosDePago + ". Que tenga un feliz viaje!")

}
