console.log('Este programa verifica las notas del colegio:')

let usuarioValidado = false
let nombre, edad,dni,asignatura
function CalcNac (edad) {
  const fechaActual = 2022
  return (fechaActual - edad)
}
function esValorValido (valor,numero) {
  if (numero){
    return(!isNaN(valor))
  }
  if (!valor){
    return false
  } else {
    return true
  }
}do{
  nombre = prompt ('Ingrese nombre completo del alumno/a')
  dni = parseFloat(prompt('Ingrese número de DNI'))
  asignatura = prompt('Ingrese asignatura corrrespondiente')
  edad = parseFloat(prompt('Ingrese edad del alumno'))

  if (esValorValido (nombre,false) && esValorValido (dni,true) && esValorValido(asignatura,false)){
    alert ('El alumno se registró correctamente')
    usuarioValidado = true
  } else {
    alert ('Datos incorrectos')
    usuarioValidado = false
  }

}while (!usuarioValidado == true) {
  let nota1 = parseInt(prompt ("Ingrese nota de evaluación (1 al 10)"))
  let nota2 = parseInt (prompt ("Ingrese nota de trabajos prácticos (1 al 10)"))  
  let nota3 = parseInt (prompt("Ingrese nota de trabajo en clase (1 al 10)"))
  let nota4 = parseInt (prompt("Ingrese nota aptitudinal (1 al 10)"))
  let promedio = (nota1 + nota2 + nota3 + nota4)/4

    function operacion (nota1, nota2, nota3, nota4) {
      promedio = (nota1 + nota2 + nota3 + nota4)/4
    } if (!promedio < 6) {
            alert ("El alumno se encuentra desaprobado/a")
        } else if (!promedio > 7) {
            alert ("El alumno se encuentra aprobado/a")
        }
  }