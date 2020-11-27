"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var coelho = {};

coelho.falar = function (fala) {
  console.log("".concat(fala));
};

coelho.falar("eu sou o mundo ahhh");

function falar(texto) {
  console.log("".concat(texto));
}

var coelhoBranco = {
  tipo: "branco",
  falar: falar
};
var coelhoMarron = {
  tipo: "marrom",
  falar: falar
};
coelhoBranco.falar("eu sou o mundo e assim serei");
coelhoMarron.falar("eu sou o mundo e assim serei marrom");
falar.call(coelhoMarron, "burp"); //call funcao pronta que recebe obj e a fala

function normalizar() {
  var _this = this;

  console.log(this.coords.map(function (elemento) {
    return elemento / _this.length;
  }));
}

normalizar.call({
  coords: [0, 2, 3],
  length: 5
}); //prototype

var vazio = {};
console.log(vazio.toString);
console.log(vazio.toString());
console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);
var protoCoelho = {
  falar: function falar(texto) {
    console.log("O coelho ".concat(this.tipo, " falou: ").concat(texto));
  }
};
var matarCoelho = Object.create(protoCoelho);
matarCoelho.tipo = "matar";
matarCoelho.falar("FACADAAAAAAAA");

function fazerCoelho(tipo) {
  var coelho = Object.create(protoCoelho);
  coelho.tipo = tipo;
  return coelho;
}

function coelho2(tipo) {
  this.tipo = tipo;
}

coelho2.prototype.falar = function (texto) {
  console.log("o ".concat(this.tipo, " falou: ").concat(texto));
};

var coelhoEstranho = new coelho2("estranho");
console.log(Object.getPrototypeOf(coelho2) == Function.prototype);
console.log(Object.getPrototypeOf(coelhoEstranho) == coelho2.prototype);

var Coelho =
/*#__PURE__*/
function () {
  function Coelho(tipo) {
    _classCallCheck(this, Coelho);

    this.tipo = tipo;
  }

  _createClass(Coelho, [{
    key: "falar",
    value: function falar(texto) {
      console.log("O ".concat(this.tipo, " Coelho fala: ").concat(texto));
    }
  }]);

  return Coelho;
}();

var matadorCoelho = new Coelho("Matar");
var coelhoPreto = new Coelho("preto");
console.log(matadorCoelho);
console.log(coelhoPreto);
matadorCoelho.falar("vou te matar");
coelhoPreto.falar("pufff");
var objeto = new (
/*#__PURE__*/
function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "getWord",
    value: function getWord() {
      return "ola";
    }
  }]);

  return _class;
}())();
console.log(objeto.getWord());
Coelho.prototype.dente = "pequeno";
console.log(matadorCoelho.dente);
matadorCoelho.dente = "grande, largo e sangrento";
console.log(matadorCoelho.dente);
console.log(coelhoPreto.dente);
console.log(Array.prototype.toString == Object.prototype.toString);
console.log([1, 2].toString());
console.log(Object.prototype.toString.call({
  value: 1,
  resto: 2
}));
var idade = {
  Boris: 39,
  Liang: 22,
  julia: 69
};
console.log("Julia \xE9 ".concat(idade["julia"]));
console.log("jack" in idade);
console.log("toString" in idade);
var idades = new Map();
idades.set("Boris", 39);
idades.set("Liang", 22);
idades.set("Julia", 62);
console.log("Julia eh ".concat(idades.get("Julia")));
console.log(idades.has("jack"));
console.log(idades.has("toString"));
console.log({
  x: 1
}.hasOwnProperty("x"));
console.log({
  x: 1
}.hasOwnProperty("toString"));

Coelho.prototype.toString = function () {
  return "um ".concat(this.tipo, " coelho");
};

console.log(String(coelhoPreto));
var sym = Symbol("name");
console.log(sym == Symbol("name"));
Coelho.prototype[sym] = 55;
console.log(coelhoPreto[sym]);
var toStringSymbol = Symbol("toString");

Array.prototype[toStringSymbol] = function () {
  return "".concat(this.length, " cm of blue yarn");
};

console.log([1, 2].toString()); // → 1,2

console.log([1, 2][toStringSymbol]());

var stringObject = _defineProperty({}, toStringSymbol, function () {
  return "a jute rope";
});

console.log(stringObject[toStringSymbol]()); // → a jute rope

console.log(_typeof(Symbol()) === "symbol");
console.log(_typeof(Symbol("foo")) === "symbol");
console.log(_typeof(Symbol.iterator) === "symbol");
var obj = {};
console.log(obj[Symbol('a')] = 'a');
console.log(obj[Symbol["for"]('b')] = 'b');
console.log(obj['c'] = 'c');
console.log(obj.d = 'd');

for (var i in obj) {
  console.log(i); // logs "c" and "d"
}