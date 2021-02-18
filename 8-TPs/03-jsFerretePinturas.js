/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //declaro
    var tempFarenhString;
    var tempFarenhNumber;

    var tempCentigNumber;

    //asigno
    tempFarenhString = txtIdTemperatura.value;
    tempFarenhNumber = parseFloat(tempFarenhString);

    tempCentigNumber = (tempFarenhNumber - 32) * 1.8;

    //solución
    alert (tempFarenhNumber +"° Farenheit es equivalente a " + tempCentigNumber + "° Centígrados.");

}

function CentigradosFahrenheit () 
{
	//declaro
    var tempCentigString;
    var tempCentigNumber;

    var tempFarenhNumber;

    //asigno
    tempCentigString = txtIdTemperatura.value;
    tempCentigNumber = parseFloat(tempCentigString);

    tempFarenhNumber = tempCentigNumber *1.8  + 32;

    //solución
    alert (tempCentigNumber +"° Centígrados es equivalente a " + tempFarenhNumber + "° Farenheit.");
}
