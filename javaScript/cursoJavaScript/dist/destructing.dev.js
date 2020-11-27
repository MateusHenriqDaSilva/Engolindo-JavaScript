"use strict";

var _pessoa, _pessoa$endereco;

var pessoa = {
  nome: "ana",
  idade: 5,
  endereco: {
    logradouro: 'rua ABC',
    numero: 1000
  }
};
var nome = pessoa.nome,
    idade = pessoa.idade;
console.log(nome, idade);
var nomePessoa = pessoa.nome,
    idadePessoa = pessoa.idade;
console.log('nome:', nomePessoa, 'idade:', idadePessoa);
var local = (_pessoa = pessoa, _pessoa$endereco = _pessoa.endereco, logradouroPessoa = _pessoa$endereco.logradouro, numeroPessoa = _pessoa$endereco.numero, cep = _pessoa$endereco.cep, _pessoa);
console.log('logradouro:', logradouroPessoa, 'pessoa:', numeroPessoa, cep);