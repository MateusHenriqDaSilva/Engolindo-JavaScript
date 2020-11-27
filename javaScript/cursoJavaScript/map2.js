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

console.log(carrinho.map(paraObj).map(apenasPreco))
const valor = carrinho.map((obj) => {
     return JSON.parse(obj)
})

const transformar = valor.map((elemento) => {
    return elemento.nome
 })

 console.log(transformar)