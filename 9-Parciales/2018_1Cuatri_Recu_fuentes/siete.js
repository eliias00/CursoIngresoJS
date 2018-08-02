function mostrar()
{
    var nota;
    var cont=0;
    var sexo;
    var max;
    var min;
    var sexmin;
    var suma;
    var prom;
    var edad;
    var contmasc=0;
    while(cont<5)
    {nota=prompt("ingrese nota");
     nota=parseInt(nota);
       while(nota<0||nota>10 || isNaN(nota))
        {
            nota=prompt("vuelva a ingresar nota");
            nota=parseInt(nota);
            suma=suma+nota;
        }
        edad=prompt("ingrese edad")
        edad=parseInt(edad)
      sexo=prompt("ingrese sexo");
      sexo=sexo.toLowerCase();
      while(sexo!="f" && sexo!="m")
       {
           sexo=prompt("vuelva a ingresar sexo");
           sexo=sexo.toLowerCase();
       }
       

       if(cont==0)
       {
           max=nota;
           min=nota;
       }
       if(nota>max)
       {
           max=nota;
       }
       if(nota<min)
       {
           nota=min;
           sexmin=sexo;
       }
       if(sexo=="m" && nota>=6)
       {
contmasc++
       }
cont++;
    }
    prom=suma/cont
document.write("promedio: " + prom + "<br>" )
document.write("nota mas baja: " + min + "y sexo " + sexmin )
document.write("cantidad de barones que su nota sea >6: " + contmasc )
document.write("nota mas baja: " + min + "y sexo " + sexmin )
}

