const alunos = [
    { nome: 'joao', nota: 8.7},
    { nome: 'Maria', nota: 4.7},
]

//imperativo 
let total = 0
for(let i=0; i< alunos.length; i++){
    total += alunos[i].nota
}
console.log((total / alunos.length).toFixed(1))

const pegarNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const totalGeral = alunos.map(pegarNota).reduce(soma)
console.log((totalGeral / alunos.length).toFixed(1)) 