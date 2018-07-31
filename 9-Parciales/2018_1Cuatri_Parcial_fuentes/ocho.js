function mostrar()
{
    var letra
    var num
    var cont=0
    var res=true
    var contpar=0
    var contimpar=0
    var contcero=0
    var prom
    var acumpos=0
    var sumaneg
    var acumneg=0
    var max 
    var min
    var letramax
    var letramin
    while(res==true)
        {   
            num=parseInt(prompt("ingrese numero"))
            acumpos=acumpos+num
           
            acumneg=acumneg+num
            cont++
            while(num<-100||num>100 || isNaN(num))
                {
                  num=parseInt(prompt("vuelva a ingresar numero"))
                }
            letra=prompt("ingrese letra")
          res=confirm("quiere seguir agregando numero y letra?")
         
        if(num%2==0 && num!=0)
                {
                    contpar++
                }
        else if(num%2!=0 && num!=0)
        {
         contimpar++
        }
        else
            {
                contcero++
            }
            if(cont==0)
            {
               
                min=num
                max=num
            }
            if(num>max)
             {
               max=num
            letramax=letra
             }
             if(num<min)
             {
                 min=num
                 letramin=letra
             }
           

    }
     if(num>0)
            {
                prom=acumpos/cont
                
            }
    else
        {
           sumaneg=acumneg++
        }
    
    


document.write("numeros pares: " + contpar + "<br>")
document.write("numeros impares: " + contimpar + "<br>")
document.write("cantidad de ceros: " + contcero + "<br>")
document.write("promedio de positivos: " + prom + "<br>")
document.write("suma de negativos: " + sumaneg + "<br>")
document.write("numero maximo: " + max + " y letra maxima: " + letramax + " numero minimo: " + min + " y letra minima " + letramin + "<br>")
}
