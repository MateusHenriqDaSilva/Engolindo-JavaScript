"use strict";

var alunos = [{
  nome: 'joao',
  nota: 8.7
}, {
  nome: 'Maria',
  nota: 4.7
}]; //imperativo 

var total = 0;

for (var i = 0; i < alunos.length; i++) {
  total += alunos[i].nota;
}

console.log((total / alunos.length).toFixed(1));

var pegarNota = function pegarNota(aluno) {
  return aluno.nota;
};

var soma = function soma(total, atual) {
  return total + atual;
};

var totalGeral = alunos.map(pegarNota).reduce(soma);
console.log((totalGeral / alunos.length).toFixed(1));