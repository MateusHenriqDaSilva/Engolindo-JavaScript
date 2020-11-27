const alunos = [
    { nome: 'pedro', nota: 9.1, bolsista: true },
    { nome: 'mateus', nota: 7.3, bolsista: true},
    { nome: 'diego', nota: 3.4, bolsista: true},
    { nome: 'denner', nota: 2.1, bolsista: true},
    { nome: 'luana', nota: 7.3, bolsista: false}
]

const bolsistasSimOuNao = alunos.map((elemento) => {
    return elemento.bolsista
})
console.log(bolsistasSimOuNao.reduce((elemento, atual) => {
    return elemento && atual
}))

console.log(bolsistasSimOuNao.reduce((elemento, atual) => {
    return elemento || atual
}))