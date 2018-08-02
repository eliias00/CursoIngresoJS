function mostrar()
{
    var precio;
    var porcentaje;
    var preciofinal;
    var preciocondesc;
    precio=prompt("ingrese precio");
    precio=parseInt(precio);
    porcentaje=prompt("ingrese porcentaje ");
    porcentaje =parseInt(porcentaje);
    preciofinal=precio*porcentaje/100;
    preciocondesc=precio-preciofinal;
    document.getElementById("elPrecioFinal").value=preciocondesc;





    
}
