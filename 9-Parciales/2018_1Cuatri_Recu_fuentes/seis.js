function mostrar()
{
    var hora;
    hora=prompt("ingrese nota");
    switch(hora)
    { 
        case"0":
        case "1":
        case "2":
        case "3":
        alert("la proxima se puede");
        break;
        case"4":
        case "5":
        case "6":
        alert("raspando");
        break;
         case"7":
        case "8":
        case "9":
        case "10":
        alert("aprobo");
        break;

        default:
        alert("la hora no es valida");

    }
   if(hora>"8"){
       alert("muy bien")
   }
   if(hora<"5")
   {
       alert("debes preocuparte mas")
   }

}
