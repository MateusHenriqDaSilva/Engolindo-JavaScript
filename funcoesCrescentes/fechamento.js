function valorDeEmbalagem(numero){
    let local = numero
    return () => local
}
const dois = valorDeEmbalagem(2)
console.log(2)
const tres = valorDeEmbalagem(3)
console.log(3)

function multiplicar(multiplicador) {
    return numero => numero * multiplicador
}

const valor = multiplicar(2)
console.log(valor(10))
console.log(multiplicar(2)(2))

