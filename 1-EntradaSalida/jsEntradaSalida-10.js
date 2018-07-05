/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
    var idesc;
    var nimp;
    importe= parseInt(document.getElementById("importe").value);
    idesc= importe*25/100;
    nimp= importe-idesc;
    document.getElementById("resultado").value=nimp;
        
}
