class Usuario {
    constructor(){
        this.usuario = []
    }

    cadastrar(value){
        if(!this.jaeCadastrado(value)){
            this.usuario.push(value)
        }
    }

    remover(usuario){
            this.usuario = this.usuario.filter(elemento => elemento !== usuario)
    }

    jaeCadastrado(value){
        return this.usuario.includes(value);
    }

    static de(cadastro){
        let usuario = new Usuario()
        for(let valor of cadastro){
            usuario.cadastrar(valor)
        }
        return usuario
    }
    [Symbol.iterator](){
        return new usuarioIterator(this)
    }
}

class usuarioIterator{
    constructor(usuario){
        this.usuario = usuario
        this.posicao = 0
    }

    proximo(){
        if(this.posicao >= this.usuario.usuario.length) {
            return {feito: true}
        } else {
            let resultado = {valor: this.usuario.usuario[this.posicao], feito: false}
            this.posicao++
            return resultado
        }
    }
}
let usuario = Usuario.de([10,20])
console.log(usuario.jaeCadastrado(10))
console.log(usuario.jaeCadastrado(30))

usuario.cadastrar(101)
console.log(usuario)
usuario.remover(101)
console.log(usuario)
console.log(usuario.jaeCadastrado(101))

for(let valor of Usuario.de(["a","b","c"])){
    console.log(valor)
}