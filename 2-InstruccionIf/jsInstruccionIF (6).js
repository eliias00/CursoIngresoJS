function mostrar()
{var edad;
edad=document.getElementById("edad").value;
if (edad<13)
  {
      alert("eres niño!!!")
  }
else if ( edad >=13 && edad <=17)
{
    alert(" eres adolescente!!!")
}
else
 {
     alert("eres mayor!!!")
 }
}//FIN DE LA FUNCIÓN
//Al ingresar una edad debemos informar si la persona es mayor de edad
// (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).