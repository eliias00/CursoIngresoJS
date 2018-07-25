function mostrar()
{
    var pivades
    var desc
    var pdes
    var iva
    var iva2
    var piva
    var precio=parseInt(prompt("ingrese precio"))
    var porc=parseInt(prompt("ingrese porcentaje"))
    
    desc=(precio*porc)/100
    pdes=precio-desc
    iva = (precio*21)/100
    iva2 = precio+iva
    alert("descuento: " + desc + "precio con descuento: " + pdes + "el iva: " + iva2)
    piva=(pdes*21)/100
    pivades=pdes+piva
    document.getElementById("elPrecioFinal").value=pivades
}
