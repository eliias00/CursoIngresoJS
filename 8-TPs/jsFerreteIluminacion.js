 function CalcularPrecio () 
{
 	 var lampara 
      var descuento
      var marca
      var iibb
     
     lampara = document.getElementById("Cantidad").value;
     marca = document.getElementById("Marca").value
     
     if(lampara>=6)
    {
     descuento = lampara*50/100
     document.getElementById("precioDescuento").value=descuento
    }

     if(lampara==5 && marca == "ArgentinaLuz")
      {
     descuento = lampara*40/100
     document.getElementById("precioDescuento").value=descuento
      }
  
      else 
      {
      descuento = lampara*30/100
      document.getElementById("precioDescuento").value=descuento
      }

      if( lampara== 4 && marca=="ArgentinaLuz"|| marca=="FelipeLamparas")
       {
     descuento = lampara*25/100
     document.getElementById("precioDescuento").value=descuento
      }
  
      else 
      {
      descuento = lampara*20/100
      document.getElementById("precioDescuento").value=descuento
      }

      if(lampara==3 && marca == "ArgentinaLuz")
      {
       descuento = lampara*15/100
       document.getElementById("precioDescuento").value=descuento
      }
      else if (lampara==3 && marca=="FelipeLamparas")
      {
        descuento = lampara*10/100
      document.getElementById("precioDescuento").value=descuento
      }
      else
      {
          descuento = lampara*5/100
     document.getElementById("precioDescuento").value=descuento
      }

      if (descuento >120)
       {
         iibb=descuento*10/100+100
         
         alert("IIBB Usted" +  iibb + "siendo" + descunto +  "el impuesto que se pagó")
       }


  

}
