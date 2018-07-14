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
var cont;
function comenzar()
{
	cont = 0;
	document.getElementById("intentos").value="";
	document.getElementById("numero").value="";

        secreto= Math.round(Math.random()*100);
	    console.log("numero aleatorio: " + secreto);
}
function verificar()
{
	var num=document.getElementById("numero").value;
	
	cont++;
	console.log("intento: " + cont);

if(num==secreto)
{
	if(cont==1)
	{
		document.getElementById("intentos").value=("usted es un Psíquico" );
	}
    
	if(cont==2)
	{
		document.getElementById("intentos").value=("excelente percepción" );
	}
    
	if(cont==3)
	{
		document.getElementById("intentos").value=("esto es suerte" );
	}
    
    if(cont==4)
	{
		document.getElementById("intentos").value=("excelente tecnica" );

	}

    if(cont==5)
	{
		document.getElementById("intentos").value=("usted esta en la media" );
	}

    if(cont>=6 && cont <=10)
	{
       document.getElementById("intentos").value=("falta tecnica" ); 
	}
    if(cont>10)
	{
	document.getElementById("intentos").value=("afortunado en el amor" );
	}

 }

	


}
