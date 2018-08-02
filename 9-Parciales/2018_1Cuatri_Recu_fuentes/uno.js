
function mostrar()
{
    var base;
    var altura;
    var superficie;
    var peri
    base=prompt("ingrese base");
    base=parseInt(base);
    altura =prompt("ingrese altura")
    altura=parseInt(altura);
    
superficie=(base*altura)/2
peri=base*3

alert("superficie: " + superficie + " y perimetro: "  + peri)
}