"use strict";

var funcionarios = [{
  nome: 'pedro',
  valor: -35
}, {
  nome: 'mateus',
  valor: 65
}, {
  nome: 'diego',
  valor: -55
}, {
  nome: 'leonardo',
  valor: 105
}, {
  nome: 'sandra',
  valor: 25
}, {
  nome: 'gabi',
  valor: 0
}, {
  nome: 'leliane',
  valor: 905
}, {
  nome: 'joao',
  valor: -1
}];
console.log(funcionarios.filter(function (elemento) {
  elemento.valor;
}));