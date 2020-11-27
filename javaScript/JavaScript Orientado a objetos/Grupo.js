class Grupo {
  constructor() {
    this.membros = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.membros.push(value);
    }
  }
  delete(value) {
    this.membros = this.membros.filter((v) => v !== value);
  }

  has(value) {
    return this.membros.includes(value);
  }

  static from(colecao) {
    let grupo = new Grupo();
    for (let value of colecao) {
      grupo.add(value);
    }
    return grupo;
  }

  [Symbol.iterator]() {
    return new GrupoIterator(this);
  }
}

class GrupoIterator {
  constructor(grupo) {
    this.grupo = grupo;
    this.posicao = 0;
  }

  next() {
    if (this.posicao >= this.grupo.membros.length) {
      return { done: true };
    } else {
      let resultado = { value: this.grupo.membros[this.posicao], done: false };
      this.posicao++;
      return resultado;
    }
  }
}

let grupo = Grupo.from([10, 20]);
console.log(grupo.has(10));

console.log(grupo.has(30));

grupo.add(10);
grupo.delete(10);
console.log(grupo.has(10));

for (let values of Grupo.from(["a", "b", "c"])) {
  console.log(values);
}

let map = { um: true, dois: true, hasOwnProperty: true}

console.log(Object.prototype.hasOwnProperty.call(map, "um"))
