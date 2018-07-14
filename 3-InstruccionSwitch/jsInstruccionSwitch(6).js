function mostrar()
{// tiene un error, si pongo 25 me dice es de noche y despues la hora no existe 
    var hora = document.getElementById('hora').value;
     switch(hora)
    { case "7":
      case "8":
      case "9":
      case "10":
      case "11":
     alert("Es de mañana")
     break;
     
      case "12":
      case "13":
      case "14":
      case "15":
      case "16":
      case "17":
      case "18":
      case "19":
     alert("Es de tarde")
     break;

     default:
     alert("es de noche")
     break;
   }
    if(hora >24)
  {
    alert("la hora no existe")
  }

}
//FIN DE LA FUNCIÓN