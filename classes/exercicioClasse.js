class Vector{
    constructor(linha,coluna){
        this.linha = linha
        this.coluna = coluna
    }
    somar(outro) {
        return new Vector(this.linha + outro.linha , this.coluna + outro.coluna)
    }

    diminuir(outro) {
        return new Vector(this.linha - outro.linha , this.coluna - outro.coluna)
    }

    getTamanho() {
        return Math.sqrt(this.linha * this.linha + this.coluna * this.coluna)
    }
}

console.log(new Vector(2,2).somar(new Vector(2,2)))
console.log(new Vector(2,2).diminuir(new Vector(3,3)))
let vator = new Vector(3,3).getTamanho().toFixed(0)
console.log(vator)