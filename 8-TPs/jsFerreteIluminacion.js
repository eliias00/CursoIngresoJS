 function CalcularPrecio () 
{
 	    var lampara;
      var marca;
      var preciocdesc;
      var cantlampara; 
      var iibb;
      var nueiibb;
      lampara = document.getElementById("Cantidad").value;
      marca = document.getElementById("Marca").value;
     cantlampara=lampara*35;
     
     if( lampara>=6)
     {
      preciocdesc=cantlampara*50/100;
      document.getElementById("precioDescuento").value=preciocdesc;
     }

     if( lampara==5 && marca=="ArgentinaLuz")
     {
      preciocdesc=cantlampara*40/100;
      document.getElementById("precioDescuento").value=preciocdesc;
     }
     else 
     {
       preciocdesc=cantlampara*30/100;
       document.getElementById("precioDescuento").value=preciocdesc;
     }

      if( lampara==4 && marca=="ArgentinaLuz" || marca == "FelipeLamparas")
     {
      preciocdesc=cantlampara*25/100;
      document.getElementById("precioDescuento").value=preciocdesc;
     }
       else 
     {
       preciocdesc=cantlampara*20/100;
       document.getElementById("precioDescuento").value=preciocdesc;
     }

       if( lampara==3 && marca=="ArgentinaLuz")
     {
      preciocdesc=cantlampara*15/100;
      document.getElementById("precioDescuento").value=preciocdesc;
     }

      else if( lampara==3 && marca=="FelipeLamparas")
     {
       preciocdesc=cantlampara*10/100;
       document.getElementById("precioDescuento").value=preciocdesc;
     }
      
     else
     {
       preciocdesc=cantlampara*5/100;
       document.getElementById("precioDescuento").value=preciocdesc;
     }
     
     if(preciocdesc>120)
     {
     iibb= preciocdesc*10/100;
     nueiibb=preciocdesc+iibb;
     alert(" IIBB Usted pago " + nueiibb + " siendo " + preciocdesc +  " el impuesto que se pagó ");
     }
      
}
