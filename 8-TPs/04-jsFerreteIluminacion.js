/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var oferta = 35;
    var cantidadComprada;
    var cantidadCompradaParseado;
    var marcaComprada; 
    var visualizacionDeResultado;
    var compraTotal; 
    var compraConDescuento;
    var precioFinal;
    var iibb = 1.1;
        
    var descuento; 

    
    cantidadComprada = txtIdCantidad.value;
    cantidadCompradaParseado = parseInt (cantidadComprada);
    marcaComprada = Marca.value;

    compraTotal = oferta * cantidadCompradaParseado;
    visualizacionDeResultado = document.getElementById("txtIdprecioDescuento").value;
    descuento = 0.85;

    switch (cantidadCompradaParseado)
    {
        case 3:
            switch (marcaComprada)
            {
                case "ArgentinaLuz":
                    descuento = 0.85;  
                    break;
                case "FelipeLamparas":
                    descuento = 0.9;
                    break;            
                default:
                    descuento = 0.95;
                    break;
            }
            break;
        
        case 4:
            switch (marcaComprada)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 0.75;                    
                    break;
            
                default:
                    descuento = 0.8;
                    break;
            }
        
        case 5:
            switch (marcaComprada) {
                case "ArgentinaLuz":
                    descuento = 0.6;
                    break;
            
                default:
                    descuento = 0.7;
                    break;
            }
    
        default:
            descuento = 0.5;
            break;
    }
    compraConDescuento = compraTotal * descuento;
    document.getElementById("txtIdprecioDescuento").value = compraConDescuento;
    
    if (compraConDescuento > 120)
    {
        precioFinal = compraConDescuento * iibb;
        alert("Usted pagó $" + ((precioFinal-compraConDescuento).toFixed(2)) + " de IIBB. Monto sin impuesto $" + compraConDescuento);
        document.getElementById("txtIdprecioDescuento").value = precioFinal.toFixed(2);
    }

    
    
    
}