const soma = (a,b) => { return a + b}
const subtrair = (a,b) => { return a - b}
const dividir = (a,b) => { return a / b}
const multiplicar = (a,b) => { return a * b}

console.log(soma(10,10))
console.log(subtrair(10,10))
console.log(dividir(10,10))
console.log(multiplicar(10,10))

function printOla(){
    console.log('ola')
}

const funcao = (fn) => {
    return fn()
}

funcao(printOla)

funcao(() => {
    console.log('o mundo vai mudar e os ignorantes e egocentricos vai cair pelos humildes')
})
console.log(funcao(Math.random))

function finalPreco(tax){
    return function(preco){
        return preco * (1 + tax)
    }
}

console.log(finalPreco(2,3.00))
const taxaComJuros = finalPreco(2)
console.log(taxaComJuros(3.00))
console.log(taxaComJuros(4.00))
console.log(taxaComJuros(5.00))