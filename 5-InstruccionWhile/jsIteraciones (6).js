function mostrar()
{   
	var num
	var cont=0;
	var suma=0;

	while(cont<5)
	{
		num=parseInt(prompt("ingrese 5 numeros "))
		cont++
		suma=suma+num
	}



document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/5;





//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.




}//FIN DE LA FUNCIÓN