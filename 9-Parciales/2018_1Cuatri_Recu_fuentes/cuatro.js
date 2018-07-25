function mostrar()
{
    var num1=prompt("ingrese numero")
    var num2=prompt("ingrese numero")
    var divi
    var suma
    if(num1==num2)
        {
            alert(num1+num2)
        
        }
    else if(num1>num2)
        {
         divi = parseInt(num1) / parseInt(num2)
         alert( "divicion: " + divi)
        }
    else
        {
        suma = parseInt(num1) + parseInt(num2)
        alert("suma: " + suma)
        }
    if(suma<50)
        {
            alert("suma: " + suma + " y es menor a 50 ")
        }
}
