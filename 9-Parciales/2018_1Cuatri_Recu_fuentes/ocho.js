function mostrar()
{
    
    var nombre;
    var cantdepag;
    var cantdevent;
    var tema;
    var res=true;
    var cont=0;
    var contpag=0;
    var contimpag=0;
    var contcero=0;
    var acum=0;
    var prom;
    var suma=0;
    while(res==true)
    {
        nombre=prompt("ingrese nombre de libro");
        cantdepag=prompt("ingrese cantidad de paginas");
        cantdepag=parseInt(cantdepag);
        cantdevent=prompt("ingrese cantidad de ventas");
        cantdevent=parseInt(cantdevent);
        acum=acum+cantdevent;
        tema=prompt("ingrese tema del libro");

        while(tema!="robotica" && tema!="programacion" && tema!="patrones" && tema!= "base de datos")
        {
            tema=prompt("vuelva a ingresar tema ");
        }
             res=confirm("quiere seguir agregando datos");

        if(cantdepag%2==0&&cantdepag!=0)
        {
            contpag++;
        }
       else 
        {
            contimpag++;
        }
        if(cantdevent==0)
        {
          contcero++;
        }
        if(tema=="programacion")
        {
         suma=suma+cantdepag;
        }
         cont++
 }
         prom=acum/cont;

document.write("cantidad de paginas pares: " + contpag + "<br>");
document.write("cantidad de paginas impares: " + contimpag + "<br>");
document.write("cantidad de ceros ventas: " + contcero+ "<br>");
document.write("promedio: " + prom + "<br>");
document.write("suma de paginas de programacion: " + suma + "<br>");

}
