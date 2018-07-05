/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var importe;
var nuevo;
var por;
importe = parseInt(document.getElementById("sueldo").value);
nuevo= importe * 0.1
por= nuevo + importe
document.getElementById("resultado").value=por;
}
