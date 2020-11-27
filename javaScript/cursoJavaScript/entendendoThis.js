const pessoa = { 
    saudacao: 'bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
const falar = pessoa.falar()
console.log(falar)

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()