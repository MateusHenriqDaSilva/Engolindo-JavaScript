"use strict";

var alunos = [{
  nome: 'pedro',
  nota: 9.1,
  bolsista: true
}, {
  nome: 'mateus',
  nota: 7.3,
  bolsista: true
}, {
  nome: 'diego',
  nota: 3.4,
  bolsista: false
}, {
  nome: 'denner',
  nota: 2.1,
  bolsista: false
}, {
  nome: 'luana',
  nota: 7.3,
  bolsista: false
}];
var resultado = alunos.map(function (elemento) {
  return elemento.nota;
});
var reduzindo = resultado.reduce(function (acumulador, atual) {
  return acumulador + atual;
});
console.log(reduzindo);