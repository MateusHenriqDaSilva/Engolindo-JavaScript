"use strict";

var coelho = {};

coelho.falar = function (texto) {
  console.log("The coelho says '".concat(texto, "'"));
};

function falar(texto) {
  console.log("O ".concat(this.type, " coelho fala ").concat(texto));
}

var coelhoBranco = {
  type: "branco",
  falar: falar
};
var coelhoMarrom = {
  type: "marrom",
  falar: falar
};
coelhoBranco.falar("o nao eu irei te matar com uma cenora" + " Cabuuuum!!!");
coelhoMarrom.falar("O meu amigo nao me desafie se nao terei que fazer aquilo que nao sou ");
coelho.falar("eu amo viver");
falar.call(coelhoMarrom, "Pofth!!");

function normalizar() {
  var _this = this;

  console.log(this.cabos.map(function (n) {
    return n / _this.length;
  }));
}

normalizar.call({
  cabos: [0, 2, 3],
  length: 5
});