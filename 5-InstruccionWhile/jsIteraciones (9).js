function mostrar()
{
	var contador=0;
	var res='si';
    var num
    var flag=true
	var max 
	var min
	while(res=='si')
	{
		num=parseInt(prompt("ingrese numero"))
	    res=prompt(" quiere ingresar otro numero? ")
	    if (flag)
		{
			flag=false
            max=num
			min=num
		}
		
		if (num>max)
		{
			max=num
		}

		if(num<min)
		{
			min=num
		}
	
	}
document.getElementById("maximo").value=max
document.getElementById("minimo").value=min

}