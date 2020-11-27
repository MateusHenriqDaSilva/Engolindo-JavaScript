const pessoa = {
    nome: "ana",
    idade: 5,
    endereco: {
        logradouro: 'rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: nomePessoa, idade: idadePessoa } = pessoa

console.log('nome:',nomePessoa, 'idade:', idadePessoa)
const local = { endereco: {logradouro: logradouroPessoa, numero: numeroPessoa, cep}} = pessoa

console.log('logradouro:', logradouroPessoa, 'pessoa:', numeroPessoa, cep)