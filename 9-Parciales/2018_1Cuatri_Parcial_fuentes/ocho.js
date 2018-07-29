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
    while(res==true)
        {   
            num=parseInt(prompt("ingrese numero"))
            acumpos++
            cont++
            acumneg++
            while(num<-100||num>100)
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

            if(num>0)
            {
                prom=acumpos+num
                
            }

    }
    
    

    if(num<0)
        {
           sumaneg=acumneg-=num
        }

    


document.write("numeros pares: " + contpar + "<br>")
document.write("numeros impares: " + contimpar + "<br>")
document.write("cantidad de ceros: " + contcero + "<br>")
document.write("promedio de positivos: " + prom + "<br>")
document.write("suma de negativos: " + sumaneg + "<br>")
}
