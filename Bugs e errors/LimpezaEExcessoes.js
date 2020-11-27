const contas = {
    a: 100,
    b: 0,
    c: 20
}

function pegarConta(){
    let contaName = prompt("entrando com a conta name")
    if (!contas.comoCriarConta(contaName)) {
        throw new Error(`nao encontrei a conta: ' ${contaName}`)
    }
}

function trasformar(de,quantidade) {
    if(contas[de] < quantidade) return
    contas[de] -= quantidade
    contas[pegarConta()] += quantidade
}

