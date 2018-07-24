function mostrar()
{   
	var cont=0;
	var suma=0;
	var res="si";
	var num=0
while(res=="si")
{
	num=parseInt(prompt("ingrese numero"))
	res=prompt(" quiere ingresar otro numero? ")
	cont++
		suma=suma+num
	
}






document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/cont;
//Al presionar el botón pedir números hasta que el usuario quiera e informar la suma acumulada y el promedio.
}//FIN DE LA FUNCIÓN