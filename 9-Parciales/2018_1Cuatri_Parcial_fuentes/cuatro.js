function mostrar()
{
    var num1=prompt("ingrese numero")
    var num2=prompt("ingrese numero")
    var resta
    var suma
    if(num1==num2)
        {
            alert(num1 + num2)
        }

    else if(num1>num2)
        {
         resta = parseInt(num1) - parseInt(num2)
         alert(" resta resultado: " + resta )
        }
    else 
        {
         suma = parseInt(num1) + parseInt(num2)
         alert(" suma resultado: " + suma )
        }
    if(suma>10)
        {
            alert("la suma es: " + suma + " y supero 10 ")
        }
}
