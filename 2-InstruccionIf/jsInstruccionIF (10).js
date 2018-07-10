function mostrar()
{
	var nota;
    nota = Math.round(Math.random()*10);
	
	if (nota==9 || nota==10)
	{
		alert(nota + " excelente ");
	}

    else if (nota>=4 && nota<=8)
    {
		alert(nota + " aprobo ");
	}

    else
	{
		alert(nota + " Vamos, la proxima se puede!!! ");
	}


}//FIN DE LA FUNCIÓN