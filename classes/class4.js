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
  
  
  

class simetriaMatrix extends Matrix{
    constructor(tamanho, elemento = (linha, coluna) => undefined){
        super(tamanho, tamanho, (linha,coluna) => {
            if(linha < coluna) return elemento(coluna,linha)
            else return elemento(linha,coluna)
        })
    }

    set(linha, coluna, valor) {
        super.set(linha,coluna,valor)
        if(linha != coluna) {
            super.set(coluna, linha, valor)
        }
    }
}

let matrix4 = new simetriaMatrix(5,(linha,coluna) => `${linha} ${coluna}`)
console.log(matrix4.get(2,3))

console.log(
    new simetriaMatrix(2) instanceof simetriaMatrix);
  // → true
  console.log(new simetriaMatrix(2) instanceof Matrix);
  // → true
  console.log(new Matrix(2, 2) instanceof simetriaMatrix);
  // → false
  console.log([1] instanceof Array);
