/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var ancho 
    var largo
    var rectangulo
    ancho = parseInt(document.getElementById("Ancho").value);
    largo = parseInt(document.getElementById("Largo").value);
    rectangulo= ancho*6 + largo*6
    alert("cantidad de alambre: " + rectangulo + " metros")
}
function Circulo () 
{
	var radio
    var terreno
    radio= parseInt(document.getElementById("Radio").value);
    terreno= ((radio *2 ) * Math.PI )*3
    alert("cantidad de alambre: " + terreno + " metros")
}

function Materiales () 
{
	
}