/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var p1
    var p2
    var p3
    var resul
    p1=parseInt(document.getElementById("PrecioUno").value)
    p2=parseInt(document.getElementById("PrecioDos").value)
    p3=parseInt(document.getElementById("PrecioTres").value)
    resul=p1 + p2 + p3
	alert(" la suma de los productos es: " + resul)
}
function Promedio () 
{
	var p1
    var p2
    var p3
    var resul
    p1=parseInt(document.getElementById("PrecioUno").value)
    p2=parseInt(document.getElementById("PrecioDos").value)
    p3=parseInt(document.getElementById("PrecioTres").value)
    resul=(p1 + p2 + p3) /3
	alert(" el promedio es: " + resul)
}

function PrecioFinal () 
{
	var p1
    var p2
    var p3
    var resul
    var resul2
    p1=parseInt(document.getElementById("PrecioUno").value)
    p2=parseInt(document.getElementById("PrecioDos").value)
    p3=parseInt(document.getElementById("PrecioTres").value)
    resul=(p1 + p2 + p3) * 0.21 
    resul2= resul + (p1 + p2 + p3)
	alert(" precio final: " + resul2)
}