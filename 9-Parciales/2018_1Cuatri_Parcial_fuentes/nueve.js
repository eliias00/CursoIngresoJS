function mostrar()
{//PREGUNTAR LOS MAX Y MIN Y PREGUNTAR PARA VALIDAD MAYUSCULAR,MINUSCULAS
    var marca 
    var res=true
    var peso
    var temp  
    var contemp=0
    var max
    var min
    var cont=0
    var marca_pes
    var cant_0=0
    var suma=0
    var prom
    while(res==true)
    { marca=prompt("ingrese marca")
      peso=parseInt(prompt("ingrese peso"))
     
      while(peso<1||peso>100|| isNaN(peso))
       {
        peso=parseInt(prompt("vuelva a ingresar peso"))
       }

       suma=suma+peso
       
       
       temp=parseInt(prompt("ingrese temperatura"))
       while(temp<-30||temp>30|| isNaN(temp))
       {
        temp=parseInt(prompt("vuelva a ingresar temperatura"))
       }
    
       res=confirm("quiere sequir agregando marca,peso,tempertura?")
       
    if(temp%2==0 && temp!=0)
   {
      contemp++
   }
   if(cont==0)
   {
       min=peso
       max=peso
   }
   else if(peso>max)
   {
       max=peso
       marca_pes=marca
   }
   if(peso<min)
   {
       min=peso
   }

   if(temp<0)
   {
     cant_0++
   }
   cont++

}
prom=suma/cont

document.write("temperaturas pares: " + contemp + "<br>")
document.write("marca mas pesada: " + marca_pes + "<br>")
document.write("cantidad de productos <0: " + cant_0 + "<br>")
document.write("promedio: " + prom+ "<br>")
document.write("maximo: " + max + "<br>")
document.write("minimo: " + min + "<br>")

}
