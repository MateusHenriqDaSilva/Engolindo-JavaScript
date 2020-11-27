let coelho = {};
coelho.falar = function (fala) {
  console.log(`${fala}`);
};
coelho.falar("eu sou o mundo ahhh");

function falar(texto) {
  console.log(`${texto}`);
}

let coelhoBranco = { tipo: "branco", falar };
let coelhoMarron = { tipo: "marrom", falar };

coelhoBranco.falar("eu sou o mundo e assim serei");
coelhoMarron.falar("eu sou o mundo e assim serei marrom");

falar.call(coelhoMarron, "burp"); //call funcao pronta que recebe obj e a fala

function normalizar() {
  console.log(this.coords.map((elemento) => elemento / this.length));
}
normalizar.call({ coords: [0, 2, 3], length: 5 });

//prototype
let vazio = {};
console.log(vazio.toString);
console.log(vazio.toString());
console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

let protoCoelho = {
  falar(texto) {
    console.log(`O coelho ${this.tipo} falou: ${texto}`);
  },
};

let matarCoelho = Object.create(protoCoelho);
matarCoelho.tipo = "matar";
matarCoelho.falar("FACADAAAAAAAA");

function fazerCoelho(tipo) {
  let coelho = Object.create(protoCoelho);
  coelho.tipo = tipo;
  return coelho;
}

function coelho2(tipo) {
  this.tipo = tipo;
}
coelho2.prototype.falar = function (texto) {
  console.log(`o ${this.tipo} falou: ${texto}`);
};

let coelhoEstranho = new coelho2("estranho");

console.log(Object.getPrototypeOf(coelho2) == Function.prototype);
console.log(Object.getPrototypeOf(coelhoEstranho) == coelho2.prototype);

class Coelho {
  constructor(tipo) {
    this.tipo = tipo;
  }
  falar(texto) {
    console.log(`O ${this.tipo} Coelho fala: ${texto}`);
  }
}
let matadorCoelho = new Coelho("Matar");
let coelhoPreto = new Coelho("preto");
console.log(matadorCoelho);
console.log(coelhoPreto);
matadorCoelho.falar("vou te matar");
coelhoPreto.falar("pufff");

let objeto = new (class {
  getWord() {
    return "ola";
  }
})();
console.log(objeto.getWord());

Coelho.prototype.dente = "pequeno";
console.log(matadorCoelho.dente);
matadorCoelho.dente = "grande, largo e sangrento";
console.log(matadorCoelho.dente);
console.log(coelhoPreto.dente);

console.log(Array.prototype.toString == Object.prototype.toString);
console.log([1, 2].toString());
console.log(Object.prototype.toString.call({ value: 1, resto: 2 }));

let idade = {
  Boris: 39,
  Liang: 22,
  julia: 69,
};

console.log(`Julia é ${idade["julia"]}`);
console.log("jack" in idade);
console.log("toString" in idade);

let idades = new Map();
idades.set("Boris", 39);
idades.set("Liang", 22);
idades.set("Julia", 62);

console.log(`Julia eh ${idades.get("Julia")}`);
console.log(idades.has("jack"));
console.log(idades.has("toString"));

console.log({ x: 1 }.hasOwnProperty("x"));
console.log({ x: 1 }.hasOwnProperty("toString"));

Coelho.prototype.toString = function () {
  return `um ${this.tipo} coelho`;
};
console.log(String(coelhoPreto));

let sym = Symbol("name");
console.log(sym == Symbol("name"));

Coelho.prototype[sym] = 55;
console.log(coelhoPreto[sym]);

const toStringSymbol = Symbol("toString");

Array.prototype[toStringSymbol] = function () {
  return `${this.length} cm of blue yarn`;
};
console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());

let stringObject = {
  [toStringSymbol]() {
    return "a jute rope";
  },
};
console.log(stringObject[toStringSymbol]());
// → a jute rope

console.log(typeof Symbol() === "symbol")
console.log(typeof Symbol("foo") === "symbol")
console.log(typeof Symbol.iterator === "symbol")

let obj = {}

console.log(obj[Symbol('a')] = 'a')
console.log(obj[Symbol.for('b')] = 'b')
console.log(obj['c'] = 'c')
console.log(obj.d = 'd')

for (let i in obj) {
   console.log(i)  // logs "c" and "d"
}