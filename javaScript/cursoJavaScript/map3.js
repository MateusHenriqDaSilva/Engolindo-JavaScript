Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "Cderno", "preco": 13.90 }',
    '{ "nome": "kitLapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.45 }'
]

// retornanr array apenas com os preco

const paraObj = (json) => JSON.parse(json)
const apenasPreco = (produto) => produto.preco
//const apenasNome = (produto) => produto.nome

console.log(carrinho.map2(paraObj).map2(apenasPreco))
const valor = carrinho.map2((obj) => {
     return JSON.parse(obj)
})

const transformar = valor.map2((elemento) => {
    return elemento.nome
 })

 console.log(transformar)