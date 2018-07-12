var secreto
var cantidad
var cont
function comenzar()
{
	
    secreto= Math.round(Math.random()*100)
    alert("numero aleatorio: " + secreto)
  cont=0

}

function verificar()
{
	var num=document.getElementById("numero").value
	cont=cont++
    if(numero==secreto )
     {
         document.getElementById("intentos").value=("usted ah ganado y solo le tomo " +cont + "intentos")
     }
     else if(numero>secreto)
     {
        document.getElementById("intentos").value=("usted se ha pasado")          
     }
    else
    {
     document.getElementById("intentos").value=("usted le falta")
    }



}