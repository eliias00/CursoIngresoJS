function mostrar()
{
    var marca 
    var res=true
    var peso
    var temp
    var contemp=0
    var max=100
    var min
    var marcapes
    while(res==true)
    { marca=prompt("ingrese marca")
      peso=parseInt(prompt("ingrese peso"))
      while(peso<1||peso>100)
       {
        peso=parseInt(prompt("vuelva a ingresar peso"))
       }

       temp=parseInt(prompt("ingrese temperatura"))
       while(temp<-30||temp>30)
       {
        temp=parseInt(prompt("vuelva a ingresar temperatura"))
       }
    
       res=confirm("quiere sequir agregando marca,peso,tempertura?")
 
   if(temp%2==0 && temp!=0)
   {
      contemp++
   }
   if(peso>max)
   {
       max=peso
       marcapes=marca

   }
}

document.write("temperaturas pares: " + contemp + "<br>")
document.write("marca: " + marcapes + "<br>")




}
