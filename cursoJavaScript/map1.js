const array = [1,2,3,4,5]

console.log(array.map((elemento) => {
    return elemento * 2 
}))

console.log(array)

const soma10 = (elemento) => elemento + 10
const triplo = (elemento) => elemento * 3
const paraDinheiro = (elemento) => `RS ${parseFloat(elemento).toFixed(2).replace('.',',')}`

const resultado = array.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)