let varianteTamanho = {
  get tamanho() {
    return Math.floor(Math.random() * 100);
  },
};

console.log(varianteTamanho.tamanho);
console.log(varianteTamanho.tamanho);

class temperatura {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenhe() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenhe(value) {
    return (this.celsius = (value - 32) / 1.8);
  }

  static fromFahrenheit(value) {
    return new temperatura((value - 32) / 1.8);
  }
}

let temp = new temperatura(22);
console.log(temp.fahrenhe);

temp.fahrenhe = 83;
console.log(temp.celsius);

class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
      this.width = width;
      this.height = height;
      this.content = [];
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          this.content[y * width + x] = element(x, y);
        }
      }
    }
    get(x, y) {
      return this.content[y * this.width + x];
    }
    set(x, y, value) {
      this.content[y * this.width + x] = value;
    }
  }  

class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }
  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}
let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));
