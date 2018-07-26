function mostrar()
{
    var cont=0
    var nota
    var sexo
    var promedio
    var acum=0
    var min=10
    var sexmin
    var masc6=0
        for( cont=0;cont<5;cont++ )
        {
            nota=parseInt(prompt( "ingrese 5 notas" ))
           acum=acum+nota
           
            while(nota<0||nota>10)
           {
            nota=parseInt(prompt("vuelva a ingresar nota "))
           }
            sexo=prompt("ingrese sexo")

            while(sexo!="f" && sexo!="m")
            {
                sexo=prompt("vuelva a ingresar sexo ")
            }

             if(nota<min)
        
            {
                min=nota
                sexmin=sexo
            }
            if(nota>=6 && sexo=="m")
            {
             masc6++
            }

        }
         
             promedio=acum/cont
             

alert("la nota mas baja: " + min  + " y el sexo: " + sexmin )
alert("el promedio es: " + promedio)
alert("cantidad de varon con nota mayor o igual a 6: " + masc6)        


}
