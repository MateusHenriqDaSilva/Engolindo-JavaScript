class Coelho{
    constructor(tipo){
        this.tipo = tipo
    }
    falar(texto){
        console.log(`O ${this.type} coelho fala: ${texto}`)
    }
}

let coelhoMatador = new Coelho("Matador")
let coelhoPreto = new Coelho("black")

let objeto = new class { getWord() { return "Ola"; } };
console.log(objeto.getWord());

Coelho.prototype.dentes = "pequeno"
coelhoPreto.dentes = "grande"
console.log(coelhoMatador.dentes)
console.log(coelhoPreto.dentes)
