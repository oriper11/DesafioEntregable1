let nombre = prompt ("Ingrese su nombre").toLocaleLowerCase()
console.log(nombre)
let edadUsuario = parseInt(prompt ("Ingrese su edad"))

if ( edadUsuario <= 17) {
        alert ("Eres menor de edad")
}

else if (edadUsuario >= 18) { 
    console.log("Eres mayor de edad")
    let drink = prompt("Ingrese su trago favorito")
    if (drink == "fernet"){
    console.log ("Prefiero fernet con coca cola")
    } else if (drink == "vodka") {
    console.log ("Prefiero bebidas blancas, como vodka, ron") 
    } else if (drink == "tragos") {
    console.log ("Prefiero tragos frutales y/o dulces, como una caipiriña")
    } else if (drink == "vino") {
    console.log ("Prefiero tomar vino, válido para tinto/blanco/rosado")
    } else if (drink == "gaseosa") {
    console.log ("Prefiero gaseosa/agua/jugo")
    }else if (drink == "gin") {
    console.log ("Prefiero gin")
    }else if (drink == "whisky") {
    console.log ("Prefiero whisky")
    }do{
    drink = prompt ("¿Desea elegir un trago más?").toLowerCase()
    }while (drink !="si" && drink != "no"){
    }while (drink != "no"){}
}