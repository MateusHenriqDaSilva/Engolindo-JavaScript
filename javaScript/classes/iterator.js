class Matrix {
  constructor(largura, altura, elemento = (linha, coluna) => undefined) {
    this.largura = largura;
    this.altura = altura;
    this.content = [];

    for (let coluna = 0; coluna < altura; coluna++) {
      for (let linha = 0; linha < largura; linha++) {
        this.content[coluna * largura + linha] = elemento(linha, coluna);
      }
    }
  }
  get(linha, coluna) {
    return this.content[coluna * this.largura + linha];
  }
  set(linha, coluna, valor) {
    this.content[coluna * this.largura + linha] = valor;
  }
}
let matrix1 = new Matrix(2, 2, (linha, coluna) => `valor ${linha}, ${coluna} `);
console.log(matrix1);
console.log(matrix1.get(1, 1));
matrix1.set(1, 1, 4);
console.log(matrix1.get(1, 1));

class MatrixIterator {
  constructor(matrix) {
    this.linha = 0;
    this.coluna = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.coluna == this.matrix.altura) return { fim: true };

    let valor = {
      linha: this.linha,
      coluna: this.coluna,
      valor: this.matrix.get(this.linha, this.coluna)};
    this.linha++;
    if (this.linha == this.matrix.largura) {
      this.linha = 0;
      this.coluna++;
    }
    return { valor, fim: false };
  }
}

Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (linha, coluna) => `valor ${linha},${coluna}`);
for (let {linha, coluna, valor} of matrix) {
  console.log(linha, coluna, valor);
}

// class Matrix {
//   constructor(width, height, element = (x, y) => undefined) {
//     this.width = width;
//     this.height = height;
//     this.content = [];

//     for (let y = 0; y < height; y++) {
//       for (let x = 0; x < width; x++) {
//         this.content[y * width + x] = element(x, y);
//       }
//     }
//   }

//   get(x, y) {
//     return this.content[y * this.width + x];
//   }
//   set(x, y, value) {
//     this.content[y * this.width + x] = value;
//   }
// }

// class MatrixIterator {
//   constructor(matrix) {
//     this.x = 0;
//     this.y = 0;
//     this.matrix = matrix;
//   }

//   next() {
//     if (this.y == this.matrix.height) return {done: true};

//     let value = {x: this.x,
//                  y: this.y,
//                  value: this.matrix.get(this.x, this.y)};
//     this.x++;
//     if (this.x == this.matrix.width) {
//       this.x = 0;
//       this.y++;
//     }
//     return {value, done: false};
//   }
// }

// Matrix.prototype[Symbol.iterator] = function() {
//   return new MatrixIterator(this);
// };

// let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
// for (let {x, y, value} of matrix) {
//   console.log(x, y, value);
// }
// // → 0 0 value 0,0
// // → 1 0 value 1,0
// // → 0 1 value 0,1
// // → 1 1 value 1,1