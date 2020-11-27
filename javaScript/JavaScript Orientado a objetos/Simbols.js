class Coelho {
  constructor(tipo) {
    this.tipo = tipo;
  }
  falar(texto) {
    console.log(`O ${this.type} coelho fala: ${texto}`);
  }
}

let coelhoMatador = new Coelho("Matador");
let coelhoPreto = new Coelho("Preto");

Coelho.prototype.toString = function () {
  return `um ${this.tipo} Coelho`;
};
console.log(String(coelhoPreto));
// → a black Coelho

let sym = Symbol("name");
console.log(sym == Symbol("name"));

Coelho.prototype[sym] = 55;
console.log(coelhoPreto[sym]);

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function () {
  return `${this.length} tamanho do array`;
};
console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());

let stringObject = {
  [toStringSymbol]() {
    return "uma corda de juta";
  },
};
console.log(stringObject[toStringSymbol]());
