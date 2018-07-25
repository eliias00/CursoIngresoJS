function mostrar()
{var planeta=prompt("ingrese planeta")

switch(planeta)
    {
        case "mercurio" :
        case "venus" :
        alert(" aca hace mas calor ")
        break;

        case "tierra" :
        alert(" aca vivimos ")
        break;

        case "marte" :
        case "jupiter" :
        case "saturno" :
        case "urano" :
        case "pluton":
        alert(" aca hace mas frio ")
        break;

        default:
        alert("ingrese planeta valido")
        











    }

}
