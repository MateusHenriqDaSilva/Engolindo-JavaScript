"use strict";

var pessoa = {
  saudacao: 'bom dia',
  falar: function falar() {
    console.log(this.saudacao);
  }
};
var falar = pessoa.falar();
console.log(falar);
var falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();