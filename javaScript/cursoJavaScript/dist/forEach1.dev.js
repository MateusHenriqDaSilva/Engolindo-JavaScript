"use strict";

var _require = require("os"),
    loadavg = _require.loadavg;

var lg = ['fallen', 'fnx', 'taco', 'fer', 'coldzera'];
console.log(lg);
console.log('foreach');
lg.forEach(function (elemento, indice) {
  console.log(indice + 1, elemento);
});
lg.forEach(function (elemento, indice, array) {
  console.log(indice + 1, elemento);
  console.log(array);
});
lg.forEach(function (nome) {
  return console.log(nome);
});

var exibirJogadores = function exibirJogadores(jogador) {
  return console.log(jogador);
};

lg.forEach(exibirJogadores);
console.log('map');
lg.map(function (elemento, indice) {
  console.log(indice + 1, elemento);
});
console.log('filter');
lg.filter(function (elemento, indice) {
  console.log(indice + 1, elemento);
});