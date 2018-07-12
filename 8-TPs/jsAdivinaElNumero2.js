/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos,
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/
var secreto;
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

	if( num==secreto)
		{
     document.getElementById("intentos").value=("usted es un Psíquico")
		  }

  if (num==secreto)
 		{
     document.getElementById("intentos").value=("excelente percepcion")
		}

		if (num==secreto)
	 		{
	     document.getElementById("intentos").value=("esto es suerte")
			}

			if (num==secreto)
		 		{
		     document.getElementById("intentos").value=("excelente tecnica ")
			  }

				if (num==secreto)
			 		{
			     document.getElementById("intentos").value=("usted esta en la media")
					}

           else if(num==secreto)
					 {
 			     document.getElementById("intentos").value=("falta tecnica")
 					}

					else
					{
			     document.getElementById("intentos").value=("afortunado en el amor")
					}



}
