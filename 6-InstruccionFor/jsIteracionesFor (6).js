function mostrar()
{
    var num
    var cantnumpar=0
    num=prompt("ingrese numero ")
    num=parseInt(num)
    for(var num;num>1;num++)
    {
       if(num%2==0 && num!=0)
       {
            document.write("numeros pares desde el: " + num + "<br>")
            cantnumpar++
        }
       
        
    }


}
//FIN DE LA FUNCIÓN