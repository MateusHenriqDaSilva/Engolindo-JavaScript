let vazio = {}
console.log(vazio.toString)

console.log(vazio.toString())

let protoCoelho = {
    falar(texto) {
        console.log(`${this.type}: + ${texto}`)
    }
}

let matarCoelho = Object.create(protoCoelho)
matarCoelho.type = 'Matar'
matarCoelho.falar('esfaqueado!')

function fazerCoelho(tipo){
    let Coelho = Object.create(protoCoelho)
    Coelho.tipo = tipo
    return Coelho
}

function Coelho(tipo){
    this.tipo = tipo
}
Coelho.prototype.speak = function(texto) {
    console.log(`O Coelho ${this.tipo} fala: ${texto}` )
}

let esquisitaCoelho = new Coelho("esquisito")
console.log(Object.getPrototypeOf(Coelho) == Function.prototype);
console.log(Object.getPrototypeOf(esquisitaCoelho) ==Coelho.prototype);
