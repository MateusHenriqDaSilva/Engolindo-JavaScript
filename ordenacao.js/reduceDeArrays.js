// concatenando um array em um so
const lista = [ [1,2,3], [4,5,6], [6,7,8] ]

const reduzindoLista = lista.reduce((combinacao, elemento) => {
    let resultado = combinacao.concat(elemento)
    return resultado
})

console.log(reduzindoLista)

//criando meu priprio loop

function meuLoop(valor, funcao1,funcao2, acao){
    for(let n = valor; funcao1(n); n = funcao2(n)) {
        acao(n)
    }
}
meuLoop(3, n => n > 0, n => n - 1, console.log);

function every(array, teste){
    for(let n of array) {
        if (!teste(n)) return false
    }
    return true
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));