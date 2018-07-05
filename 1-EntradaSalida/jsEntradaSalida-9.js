/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var importe
var nuevo
importe = parseInt(document.getElementById("sueldo").value;
nuevo= importe + 10
document.getElementById("resultado").value=nuevo;

}
