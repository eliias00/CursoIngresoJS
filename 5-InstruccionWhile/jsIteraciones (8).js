function mostrar()
{   var cont=0;
	var posi=0;
	var nega=1;
	var res='si';
	var num=0
while(res=="si")
{
	num=parseInt(prompt("ingrese numero"))
	res=prompt(" quiere ingresar otro numero? ")
	 
	if (num>=0)
	{
    posi+=num
	}
	else
    {
		nega*=num
	}

}







document.getElementById('suma').value=posi;
document.getElementById('producto').value=nega;

}//FIN DE LA FUNCIÓN