function mostrar()
{var precio = parseInt(prompt("ingrese precio "))
 var porc = parseInt(prompt("ingrese porcentaje"))
 var pfinal
 var pdesc
 
 pfinal =precio*porc/100
 pdesc=precio-pfinal
 document.getElementById("elPrecioFinal").value=pdesc



}
