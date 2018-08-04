function mostrar()
{//PREGUNTAR PUNTO F 
    var animal;
    var peso;
    var temp;
    var cont=0;
    var res=true;
    var contempar=0;
    var nombrepesa;
    var tempesada;
    var animal0=0;
    var suma=0;
    var prom;
    while(res==true)
    {
        animal=prompt("ingrese nombre de animal");

        peso=prompt("ingrese peso");
        peso=parseInt(peso);
        while(peso<1||peso>1000 || isNaN(peso))
        {
            peso=prompt("vuelva a ingresar peso");
            peso=parseInt(peso);
        }
        suma=suma+peso;
        temp=prompt("ingrese temperatura");
        temp=parseInt(temp);
        while(temp<-30||temp>30 || isNaN(temp))
        {
          temp=prompt(" vuelva a ingrese temperatura");
          temp=parseInt(temp);
        }
        res=confirm("quiere seguir agregando datos?");


    if(temp%2==0 && temp!=0)
     {
      contempar++;
     }
     if(cont==0)
     {
         max=peso;
         min=peso;
     }
     if(peso>max)
     {
         max=peso;
         nombrepesa=animal;
         tempesada=temp;
     }
     if(peso<min)
     {
         min=peso;
     }
     if(temp<0)
     {
         animal0++;
     }

     cont++;
    }

prom=suma/cont;

document.write("cantidad de temperaturas pares: " + contempar + "<br>");
document.write("el nombre mas pesado: " + nombrepesa + " y temperatura del animal mas pesado: " + tempesada + "<br>");
document.write("cantidad de animales que viven a -0°: " + animal0 + "<br>");
document.write("promedio: " + prom + "<br>");
}