"use strict";

Array.prototype.reduce2 = function (fn, valorInicial) {
  var inicial = valorInicial ? 0 : 1;
  var acumulador = valorInicial || this[0];

  for (var i = inicial; i < this.length; i++) {
    acumulador = fn(acumulador, this[i], i, this);
  }

  return acumulador;
};

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
  bolsista: true
}, {
  nome: 'denner',
  nota: 2.1,
  bolsista: true
}, {
  nome: 'luana',
  nota: 7.3,
  bolsista: false
}];
var bolsistasSimOuNao = alunos.map(function (elemento) {
  return elemento.bolsista;
});
console.log(bolsistasSimOuNao.reduce2(function (elemento, atual) {
  return elemento && atual;
}));
console.log(bolsistasSimOuNao.reduce2(function (elemento, atual) {
  return elemento || atual;
}));