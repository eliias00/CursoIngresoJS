/*Al comenzar el juego generaremos un número
RANDOM del 1 al 3 para la selección de la máquina,
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccion;
var num
var pie=1
var pap =2
var tij =3
function comenzar()
{
	num=Math.round(Math.random()*(2)+1);
console.log(num)



}//FIN DE LA FUNCIÓN
function piedra()
{
	if ( pie>num)
{
	alert(" usted gano")
}
if(pie ==num)
{
	alert("usted empato")
}
if (pie<num )
{
	alert("usted perdio")
}

}
//FIN DE LA FUNCIÓN
function papel()
{
	if ( pap>num)
{
	alert(" usted gano")
}
if(pap ==num)
{
	alert("usted empato")
}
if (pap<num )
{
	alert("usted perdio")
}


}
//FIN DE LA FUNCIÓN
function tijera()
{
	if ( tij>num)
{
	alert(" usted gano")
}
if(tij ==num)
{
	alert("usted empato")
}
if (tij<num )
{
	alert("usted perdio")
}


}
//FIN DE LA FUNCIÓN
