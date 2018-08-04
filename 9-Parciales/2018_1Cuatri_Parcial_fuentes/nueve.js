function mostrar()
{
    var marca;
    var peso;
    var temp;
    var res=true;
    var cont=0;
    var conttemp=0;
    var max;
    var min;
    var marcapes;
    var marca_0=0;
    var suma=0;
    while(res==true)
    {
       marca=prompt("ingrese marca");

       peso=prompt("ingrese peso");
       peso=parseInt(peso);
       while(peso<1||peso>100 || isNaN(peso))
       {
           peso=prompt("vuelva a ingresar peso");
           peso=parseInt(peso);
       }
       suma=suma+peso;
       temp=prompt("ingrese temperatura");
       while(temp<-30|| temp>30 || isNaN(temp))
       {
           temp=prompt("vuelva a ingresar temperatura");
           temp=parseInt(temp);
       }
       res=confirm("quiere seguir agregando datos?");
       

   if(temp%2==0 && temp!=0)
   {
     conttemp++;
   }
 
   if(cont==0)
   {
       min=peso;
       max=peso;
   }
   if(peso>max)
   {
       max=peso;
       marcapes=marca;
   }
   if(peso<min)
   {
       min=peso;
   }
   if(temp<0)
   {
    marca_0++;

   }




   cont++;
   }
prom=suma/cont;
document.write("cantidad de temperaturas pares: " + conttemp + "<br>");
document.write("marca mas pesada: " + marcapes + "<br>");
document.write("cantidad de productos conservados a -0°: " + marca_0 + "<br>");
document.write("peso maximo: " + max + "<br>");
document.write("peso minimo: " + min + "<br>");
document.write("promedio: " + prom + "<br>");


}




