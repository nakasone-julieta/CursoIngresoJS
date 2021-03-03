/*Enunciado:
** Bienvenidos.
** En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
** a) la Nacionalidad de la persona con mas temperatura.
** b) Cuantos mayores de edad( más de 17) estan solteros
** c) La cantidad de Mujeres que hay solteras o viudas.
** d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
** e) El promedio de edad entre las mujeres casadas.
*/
function mostrar()
{
	var nacionalidad;
	var sexo; 
	var edad; 
	var edadParseada; 
	var estadoCivil; 
	var temperatura; 
	var continuar;

	do
	{
		nacionalidad= prompt("ingrese una nacionalidad").toLowerCase();
		while (isNaN(nacionalidad) == false || nacionalidad == " ") 
		{
			nacionalidad=prompt ("ERROR: ingrese una nacionalidad válida").toLowerCase();
			
		}
		
		sexo = prompt ("ingrese un género").toLowerCase();
		while (sexo != "femenino" && sexo != "masculino" )
		{
			sexo = prompt ("ERROR. Ingrese un género válido (femenino/masculino)").toLowerCase();
		}

		edad = prompt("ingrese una edad");
		edadParseada = parseInt(edad);
		while (isNaN(edadParseada) || edadParseada < 0)
		{
			edad = prompt("ERROR. ingrese una edad válida");
			edadParseada = parseInt(edad);	
		}

		estadoCivil = prompt ("ingrese un estado civil").toLowerCase;
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt ("ERRROR. ingrese un estado civil válido (soltero,casado,viudo)").toLowerCase;
		}

		temperatura = prompt("ingrese una temperatura corporal");
		temperaturaParseado = parseInt(temperatura);
		while (isNaN(temperaturaParseado) || temperaturaParseado<34 || temperaturaParseado>43)
		{
			temperatura = prompt("ERROR.ingrese una temperatura corporal válida mayor a 34 y menor a 43 grados");
			temperaturaParseado = parseInt(temperatura);
		}
		continuar = confirm ("¿Desea cargar los datos de otra persona?");
	//::::::::::::::::::::::::PIDO DATOS:::::::::::::::::::::://		
		
		///////////consolelog.//////
		console.log("nacionalidad: "+ nacionalidad);
		console.log("sexo: " +sexo);
		console.log("edadParseada: "+edadParseada);
		console.log("estadoCivil: "+estadoCivil);
		console.log("temperaturaParseado: "+temperaturaParseado);
		///////////consolelog.//////




	} while (confirm==true);


}
