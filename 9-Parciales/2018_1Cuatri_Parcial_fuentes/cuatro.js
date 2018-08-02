function mostrar()
{
    var num1;
    var num2;
    var resta;
    var suma;
   num1=prompt("ingrese primer numero") ;
   num2=prompt("ingrese segundo numero") ;

   if(num1==num2)
   {
       alert(num1+num2);
   }
   else if(num1>num2)
   {
    resta= parseInt(num1) - parseInt(num2);
    alert("resta: " + resta);
   }
   else
   {
    suma=parseInt(num1)+ parseInt(num2);
    alert("suma: " + suma);
   }

   if(suma>10)
  {
    alert("la suma es: " + suma + " y supero 10");
  }






    
    
}
