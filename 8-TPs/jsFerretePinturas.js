/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados ()
{
	var temp
	var temp2
	temp = document.getElementById("Temperatura").value
	temp2 = (temp-32)/1.8
	alert(temp + " Fahrenheit son " + temp2 +  " centígrados ")
}

function CentigradosFahrenheit ()
{
	var temp
	var temp2
	temp = document.getElementById("Temperatura").value
	temp2 = temp*1.8 + 32
	alert(temp + " centigrados son " + temp2 +  " Fahrenheit ")
}
