function mostrar()
{
	var res="s";
    var num
	var sumaneg
	var sumapos
	var cantpos=0
	var cantneg=0
	var cantceros=0
	var cantnumpar=0
	var prompos
	var promneg
    
    while(res=="s")
	{ 
	  num=parseInt(prompt("ingrese numero"))
	  res=prompt(" quiere ingresar otro numero? ")

	  if(num<0)
	  {
	   sumaneg =+num
	   cantneg++
	  }
	  else if(num>0)
	  {
		  sumapos=num + num
		  cantpos++
	  }
	  else{
		cantceros++
	  }
	  
	  
	  if(num%2==0)
	  {
		  cantnumpar++
	  }
prompos= sumapos/cantpos

promneg=sumaneg/cantneg


	
	}
document.write("suma negativa: " + sumaneg + "<br\>")
document.write("suma positiva: " + sumapos + "<br\>")
document.write("cantidad de positivos : " + cantpos + "<br\>")
document.write("cantidad de negativos : " + cantneg + "<br\>")
document.write("cantidad de ceros : " + cantceros  + "<br\>")
document.write("cantidad de numeros pares : " + cantnumpar  + "<br\>")
document.write("promedio de positivos : " + prompos  + "<br\>")
document.write("promedio de negativos : " + promneg  + "<br\>")

}//FIN DE LA FUNCIÓN