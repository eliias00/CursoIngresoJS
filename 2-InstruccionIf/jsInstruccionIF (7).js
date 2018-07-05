function mostrar()
{

    var edad;
    var ec;
    edad=document.getElementById("edad").value;
    ec=document.getElementById("estadoCivil").value;
    if (edad <18 && ec!= "Soltero")
	{
        alert("eres muy pequeño para no ser soltero");
    }


}//FIN DE LA FUNCIÓN