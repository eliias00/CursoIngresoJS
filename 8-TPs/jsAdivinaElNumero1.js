var secreto
var cont=0
function comenzar()
{

    secreto= Math.round(Math.random()*100)
    console.log("numero aleatorio: " + secreto)


}

function verificar()
{
	var num=document.getElementById("numero").value
	 cont++
    if(num==secreto )
     {
         document.getElementById("intentos").value=("usted ah ganado y solo le tomo " +cont + " intentos")
     }
     else if(num>secreto)
     {
        document.getElementById("intentos").value=("usted se ha pasado")
     }
    else
    {
     document.getElementById("intentos").value=("usted le falta")
	 }



}
