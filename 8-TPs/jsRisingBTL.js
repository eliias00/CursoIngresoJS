/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad
    var sexo 
    var ecivil
    var sbruto
    var nlegajo 
    var nacio

     edad=prompt("ingrese edad")

     while(edad<18 || edad>90)
    {
    edad=prompt("vuelva a ingresar edad ")
    }

    sexo =prompt("ingrese sexo")

    while(sexo!="m" && sexo!="f")
    {
        sexo=prompt("vuelva a ingresar el sexo")
    }

    ecivil=prompt("ingrese estado civil") 

    while(ecivil!="soltero" && ecivil!="casado" && ecivil!="divorciado" && ecivil!="viudo")
    {
    ecivil=prompt("ingrese un estado civil correcto")
    }

    sbruto =prompt("ingrese sueldo bruto")

    while(sbruto<8000)
    {
        sbruto=prompt("vuelva a ingresar el saldo bruto")
    }

  nlegajo =prompt("ingrese Nº de legajo")

    while(nlegajo<1000)
    {
        nlegajo=prompt("vuelva a ingresar el Nº de legajo")
    }

    nacio=prompt("ingrese nacionalidad") 

    while(nacio!="a" && nacio!="e" && nacio!="n")
    {
            ecivil=prompt("ingrese una nacionalidad valida")
    }

    document.getElementById("Edad").value=edad
    document.getElementById("Sexo").value=sexo
    document.getElementById("EstadoCivil").value=ecivil
    document.getElementById("Sueldo").value=sbruto  
    document.getElementById("Legajo").value=nlegajo 
    document.getElementById("Nacionalidad").value=nacio
 
}
