/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
   //declaro
   var largoTerreno; 
   var largoTerrenoParceado; 
   
   var anchoTerreno;
   var anchoTerrenoParceado;
   
   var perimetroTerreno; 
   var perimetroTerrenoParceado; 

   var alambreX3;

   //asigno

   largoTerreno = txtIdLargo.value;
   largoTerrenoParceado = parseFloat(largoTerreno);

   anchoTerreno = txtIdAncho.value;
   anchoTerrenoParceado = parseFloat(anchoTerreno);

   perimetroTerreno = largoTerrenoParceado * 2 + anchoTerrenoParceado * 2;

   alambreX3 = perimetroTerreno *3;

   //solucion
   alert("se necesitará comprar " + alambreX3 + " mt de alambre");

}


function Circulo () 
{
    //declaro
    var radio;
    var radioParseado;

    var perimetro;

    var alambreX3;

    //asigno
    radio = txtIdRadio.value;
    radioParseado = parseFloat(radio);

    perimetro = radioParseado * 6.28 ;
    
    alambreX3 = perimetro * 3;
    
    //solución
    alert ("Se necesita comprar " + alambreX3 + " mt de alambre para un terreno circular");

	
}
function Materiales () 
{
    //declaro
    var largo; 
    var largoNumero;
    
    var ancho; 
    var anchoNumero; 

    var area;

    var cementoNumero;
    var calNumero;

    var cantCemento;
    var cantCal;

    //asigno
    largo = txtIdLargo.value;
    largoNumero = parseFloat(largo);

    ancho = txtIdAncho.value;
    anchoNumero = parseFloat(ancho);

    area = largoNumero*anchoNumero;

    cementoNumero = parseInt(2);
    calNumero = parseInt(3);

    cantCemento = cementoNumero * area;
    cantCal = calNumero * area;

    //solución
    alert ("Se necesita " + cantCemento + " de cemento y " + cantCal + " para el contrapiso de " + area + " mt2.");

	
}



keisuke
 var largo ;
    var ancho ;
    var largoParseado ;
    var anchoParseado ;
    //var alambreX3 ;
    var perimetro ;

    largo = txtIdLargo.value ;
    ancho = txtIdAncho.value ;
    //alambreX3 = 3 ;

    largoParseado = parseFloat (largo) ;
    anchoParseado = parseFloat (ancho) ;
    
    perimetro = largoParseado + largoParseado + anchoParseado + anchoParseado

    alert ("La cantidad de alambre que debe comprar es " + perimetro * 3)

function Circulo () 
{
    
    var radio
    var radioParseado
    var X3
    var perimetro
    var pi= Math.PI

    radio = txtIdRadio.value
    radioParseado = parseFloat (radio)
    X3 = 3
    perimetro = 2*(pi * radio)

    alert ("La cabtidad de alambre que debe comprar es " + perimetro)
	
}