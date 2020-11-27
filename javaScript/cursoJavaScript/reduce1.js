const alunos = [
    { nome: 'pedro', nota: 9.1, bolsista: true },
    { nome: 'mateus', nota: 7.3, bolsista: true},
    { nome: 'diego', nota: 3.4, bolsista: false},
    { nome: 'denner', nota: 2.1, bolsista: false},
    { nome: 'luana', nota: 7.3, bolsista: false}
]

const resultado  = alunos.map((elemento) => {
    return elemento.nota
})

const reduzindo = resultado.reduce((acumulador, atual) => {
    return acumulador+atual
},)

console.log(reduzindo)


