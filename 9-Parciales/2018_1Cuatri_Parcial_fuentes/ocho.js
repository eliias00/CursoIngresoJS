function mostrar()
{//el if de los contadores va a adentro o afuera del while  de res?
    var letra;
    var numero;
    var res=true;
    var contpar=0;
    var contimpar=0;
    var contcero=0;
    var suma=0;
    var prom;
    var acumneg=0;
    var acumpos=0;
    var cont=0;
    var sumaneg;
    var letramax;
    var letramin;
    while(res==true)
    { 
        letra=prompt("ingrese letra");
        numero=prompt("ingrese numero");
        numero=parseInt(numero);
        suma=suma+numero
        while(numero<-100||numero>100 || isNaN(numero))
        {
            numero=prompt("vuelva a ingresar numero");
            numero =parseInt(numero);
        }
        res=confirm("quiere seguir agregando datos?");
        if(numero%2==0 && numero!=0)
     {
      contpar++;
     }
     else if(numero%2!=0)
     {
         contimpar++;
     }
    
     else
     {
      contcero++;
     }
     if(numero>0)
     {
         acumpos++
         
     }
     else
     {
        acumneg++
     }
     if(cont==0)
     {
         max=numero
         min=numero
     }
     if(numero>max)
     {
         max=numero
         letramax=letra
     }
     if(numero<min)
     {
         min=numero
         letramin=letra
     }





    cont++
    }  
        
prom=suma/acumpos
sumaneg=acumneg-=numero

document.write("numeros pares: " + contpar + "<br>");
document.write("numeros impares: " + contimpar + "<br>");
document.write("cantidad de ceros: " + contcero + "<br>");
document.write("promedio de positivos: " + prom + "<br>");
document.write("suma de negativos: " + sumaneg + "<br>");
document.write("numero maximo: " + max + " y letra maxima: " + letramax + "<br>" + " numero minimo: " + min + "letra minima: " + letramin + "<br>")

}
