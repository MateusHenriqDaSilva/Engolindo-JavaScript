function eDeMaior(idade,sexo){
    return idade > 18 && sexo == 'M'
}

console.log(eDeMaior(20, 'M'))

let nome = 'pedro'
if(nome.trim() !== ''){
    console.log('nome valido')
}

if (nome.trim() !== '' && nome.trim().length >= 3) {
    console.log('nome valido')
}

function isValidName(name){
    return naoEstaVazio(nome) && menorQue(3,nome) && maiorQue(30, nome)
}

if (isValidName(nome)) {
    console.log('nome valido')
}

function naoEstaVazio(field) {
    return field.trim() !== ''
}

// function menorQue(length, field) {
//     return field.length >= length
// }

// menorQue(3, 'mateus')

if (naoEstaVazio(nome) && menorQue(3,nome)) {
    console.log('nome valido!')
}

// function maiorQue(length, field) {
//     return field.trim().length <= length  
// }

if (isValidName(nome)) {
    console.log('foi!')
}

function maiorQue(length){
    return function(campo) {
        return campo.length >= length
    }
}
//teste1(3)
function menorQue(length){
    return function(campo) {
        return campo.length <= length
    }
}
//teste2(30)

const validation = {
    nome: [naoEstaVazio, maiorQue(3), menorQue(30)]
}

console.log(validation.nome.every((fn) => {
    return fn(nome)
}))

function eValido(validation, field){
    return validation.every((fn) => {
        return fn(field)
    })
}

eValido(validation.nome, nome) ? console.log("meus parabens") : console.log("errou") 

const operador = '+'

if (operador === '+' || operador === '-' || operador === '*' || operador === '/') {
    console.log('Operador Valido')
}

if (['+','-','*','/'].includes(operador)) {
    console.log('operador valido utilizando includes')
}

const usuario = {
    endereco: {
        bairro: "nome da vila"
    }
}

console.log(usuario.endereco.bairro) 

function getDesconto(pessoa){
    let preco
    if(pessoa < 10) {
        preco = 500
    } else if (pessoa >= 10 && pessoa < 25) {
        preco = 350
    }else if (pessoa >= 25 && pessoa < 100) {
        preco = 250
    }else if(pessoa >= 100) {
        preco = 200
    }
    return preco
}

console.log(getDesconto(305))

function menor(valor1){
    return function(valor2) {
        return valor2 < valor1 
    }
}

function between(n1,n2) {
    return function(valor){
        return valor >= n1 && valor < n2
    }
}

function maior(valor1){
    return function(valor2) {
        return valor2 > valor1 
    }
}

function getDesconto2(pessoa) {
    const [ _, resultado] = [
        [ menor(10),500 ],
        [ between(10,25), 350 ],
        [ between(25,100), 250 ],
        [ maior(100), 200 ]
    ].find(function([teste]) {
        return teste(pessoa)
    })
    return resultado
}
console.log(getDesconto2(300))

const types = {
    PLATINUM(){
        return 'Platinum Custumer'
    },
    GOLD(){
        return 'Gold Custumer'
    },
    SILVER(){
        return 'Silver Custumer'
    },
}

function setAccType(accType){
    return types[accType]()
}

console.log(setAccType('PLATINUM'))