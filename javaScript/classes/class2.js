let varianteTamanho = {
    get tamanho() {
        return Math.floor(Math.random() * 100)
    }
}

console.log(varianteTamanho.tamanho)
console.log(varianteTamanho.tamanho)

class Temperatura {
    constructor(celsius){
        this.celsius = celsius
    }
    get fahrenheit(){
        return this.celsius * 1.8 + 32
    }
    set fahrenheit(valor){
        return this.celsius = (valor - 32) / 1.8
    }

    static fromFahrenheit(valor) {
        return new Temperatura((valor - 32) / 1.8)
    }
}

let temp = new Temperatura(22)
console.log(temp.fahrenheit)
temp.fahrenheit = 86
console.log(temp.celsius)


