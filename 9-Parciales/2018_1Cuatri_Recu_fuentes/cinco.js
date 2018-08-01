function mostrar()
{
var semana;
semana = prompt("ingrese dia de semana");
switch(semana)
{ case "sabado" :
  case "domingo":
  alert("buen finde");
  break;

  case "lunes" :
  case "martes":
  case "miercoles" :
  case "jueves":
  case "viernes" :
alert("a trabajar");
break;

  default:
alert("no es dia valido");
}
}
