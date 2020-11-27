"use strict";

Array.prototype.filter2 = function (fn) {
  var filtrado = [];

  for (var i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      filtrado.push(this[i]);
    }
  }

  return filtrado;
};

var funcionarios = [{
  nome: "pedro",
  valor: -35,
  contratado: false
}, {
  nome: "mateus",
  valor: 65,
  contratado: true
}, {
  nome: "diego",
  valor: -55,
  contratado: false
}, {
  nome: "leonardo",
  valor: 105,
  contratado: true
}, {
  nome: "sandra",
  valor: 25,
  contratado: false
}, {
  nome: "gabi",
  valor: 0,
  contratado: true
}, {
  nome: "leliane",
  valor: 905,
  contratado: false
}, {
  nome: "joao",
  valor: -1,
  contratado: true
}];
console.log(funcionarios.filter(function (elemento) {
  return elemento.valor > 0;
}));
console.log(funcionarios.filter(function (elemento) {
  return elemento.contratado && elemento.valor > 0;
}));