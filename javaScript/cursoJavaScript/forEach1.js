const { loadavg } = require("os")

const lg = ['fallen','fnx','taco','fer','coldzera']
console.log(lg)

console.log('foreach')

lg.forEach((elemento,indice) => {
    console.log(indice+1, elemento)
})
lg.forEach((elemento,indice, array) => {
    console.log(indice+1, elemento)
    console.log(array)
})

lg.forEach((nome) => console.log(nome))
const exibirJogadores = (jogador) => console.log(jogador)
lg.forEach(exibirJogadores)

console.log('map')

lg.map((elemento,indice) => {
    console.log(indice+1,elemento)
})

console.log('filter')
lg.filter((elemento, indice) => {
    console.log(indice+1,elemento)
})

