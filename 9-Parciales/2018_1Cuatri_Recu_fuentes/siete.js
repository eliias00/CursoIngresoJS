function mostrar()
{
    var edad;
    var sexo;
    var nota;
    var cont=0;
    var acum=0;
    var prom;
    var contmay=0
    for(var cont=0;cont<5;cont++)
 { 
    nota=prompt("ingrese 5 nota");
    nota=parseInt(nota);
    acum=acum+nota
    
     while(nota<0||nota>10 || isNaN(nota))
     {
     nota =prompt("vuelva a ingresar nota");
     nota=parseInt(nota);
     cont++
     }

  edad=prompt("ingrese la edad ");
  edad = parseInt(edad);

   sexo=prompt("ingrese sexo");
   while(sexo!="f" && sexo!="m" )
   {
   sexo =prompt("vuelva a ingresar sexo");
   }
if(sexo=="m" && edad >18 && nota >=6)
{
contmay++
}


  }



prom=acum/cont;

document.write("promedio: " + prom + "<br>");
document.write("cantidad de mayores: " + contmay + "<br>");
}
