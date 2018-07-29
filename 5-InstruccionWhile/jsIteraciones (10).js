function mostrar()
{//como se puede escribir mas grande en la pagina de document
	var res=true;
    var num
	var sumaneg=0
	var sumapos=0
	var cantpos=0
	var cantneg=0
	var cantceros=0
	var cantnumpar=0
	var prompos
	var promneg
	var dife 
    
    while(res==true)
	{ 
	  num=parseInt(prompt("ingrese numero"))
	  res=confirm(" quiere ingresar otro numero? ")

	  if(num<0)
	  {
	   sumaneg+=num
	   cantneg++
	  }
	  else if(num>0)
	  {
		  sumapos+=num
		  cantpos++
	  }
	  else{
		cantceros++
	  }
	  
	  
	  if(num%2==0 && num!=0)
	  {
		  cantnumpar++
	  }

	}
	prompos= sumapos/cantpos
	promneg=sumaneg/cantneg
	dife=sumapos+sumaneg

document.write("suma negativa: " + sumaneg + "<br\>")
document.write("suma positiva: " + sumapos + "<br\>")
document.write("cantidad de positivos : " + cantpos + "<br\>")
document.write("cantidad de negativos : " + cantneg + "<br\>")
document.write("cantidad de ceros : " + cantceros  + "<br\>")
document.write("cantidad de numeros pares : " + cantnumpar  + "<br\>")
document.write("promedio de positivos : " + prompos  + "<br\>")
document.write("promedio de negativos : " + promneg  + "<br\>")
document.write("diferencia: " + dife + "<br\>")
}
//FIN DE LA FUNCIÓN