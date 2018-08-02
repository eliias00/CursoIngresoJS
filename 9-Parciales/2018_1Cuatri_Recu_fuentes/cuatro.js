function mostrar()
{ 
    var num1;
    var num2;
    var divi;
    var suma ;
    num1=prompt("ingrese numero");
    num2=prompt("ingrese numero");

if(num1==num2)
{
    alert(num1+num2);

}
 else if( num1>num2)
 {
    divi= parseInt(num1) / parseInt(num2);
     alert("divicion: " + divi );
 }
 else
 {
   suma =parseInt(num1)+ parseInt(num2);
   alert("suma: " + suma  );
 }
  if(suma >50)
  {
      alert(" la suma es: " + suma +  "y supero 50");
  }





}

