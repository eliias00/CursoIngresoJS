function mostrar()
{
    var dia;
    dia=prompt("ingrese dia");
    switch(dia)
    {
        case "domingo":
        case "sabado":
        alert("buen finde");
        break;

        case"lunes":
        case "martes":
        case"miercoles":
        case"jueves":
        case "viernes":
        alert("a trabajar ")
        break;
         default:
         alert( " dia no es valido");

    }

}
