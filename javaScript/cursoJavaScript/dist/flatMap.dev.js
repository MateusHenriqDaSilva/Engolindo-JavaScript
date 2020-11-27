"use strict";

var escola = [{
  nome: "turma 1",
  alunos: [{
    nome: "Rebeca",
    nota: 8.9
  }, {
    nome: "roberto",
    nota: 4.3
  }]
}, {
  nome: "turma 2",
  alunos: [{
    nome: "sandra",
    nota: 8.9
  }, {
    nome: "robedennerrto",
    nota: 3.3
  }]
}];
console.log(escola.flatMap(function (elemento) {
  var totalDeAluno = elemento.alunos;
  return totalDeAluno;
}).map(function (elemento) {
  return elemento.nota;
}));

var pegarNota = function pegarNota(elemento) {
  return elemento.nota;
};

var pegarNotaDaTurma = function pegarNotaDaTurma(elemento) {
  return elemento.alunos.map(pegarNota);
};

console.log(escola.map(pegarNotaDaTurma));

Array.prototype.flatMap2 = function (fn) {
  return Array.prototype.concat(apply([], this.map(fn)));
};