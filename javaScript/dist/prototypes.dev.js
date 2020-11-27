"use strict";

var vazio = {};
console.log(vazio.toString);
console.log(vazio.toString());
var protoCoelho = {
  falar: function falar(texto) {
    console.log("".concat(this.type, ": + ").concat(texto));
  }
};
var matarCoelho = Object.create(protoCoelho);
matarCoelho.type = 'Matar';
matarCoelho.falar('esfaqueado!');

function fazerCoelho(tipo) {
  var Coelho = Object.create(protoCoelho);
  Coelho.tipo = tipo;
  return Coelho;
}

function Coelho(tipo) {
  this.tipo = tipo;
}

Coelho.prototype.speak = function (texto) {
  console.log("O Coelho ".concat(this.tipo, " fala: ").concat(texto));
};

var esquisitaCoelho = new Coelho("esquisito");
console.log(Object.getPrototypeOf(Coelho) == Function.prototype);
console.log(Object.getPrototypeOf(esquisitaCoelho) == Coelho.prototype);