const { defineRequestType } = require("./crow-tech")

class Timeout extends Error {}

function solicitar(ninho, alvo, tipo, conteudo){
    return new Promise((resolver, rejeitar) => {
        let feito = false
        function tentativa(tentar){
            ninho.send(alvo, tipo, conteudo, (fracassou, valor) => {
                feito = true
                if(fracassou) rejeitar(fracassou)
                else resolver(valor)
            })
            setTimeout(() => {
                if (feito) return
                else if(tentar < 3) tentativa(n + 1)
                else rejeitar(new Timeout("tempo acabou"))
            }, 250)
        }
        tentativa(1)
    })
}

function tipoDeSolicitacao(name,manipular){
    defineRequestType(name, (ninho, conteudo, fonte, callback) => {
        try {
            Promise.resolver(manipular(ninho,conteudo,fonte))
                .then(resposta => callback(null,resposta),
                    failure => callback(failure))
        } catch(execption) {
            callback(execption)
        }
    })
}

console.log(tipoDeSolicitacao("ping",() => "pong"))

function vizinhosDisponivel(ninho){
    let solicitacoes = ninho.vizinhos.map(vizinho => {
        return solicitar(ninho,vizinho, "ping")
            .then(() => true, () => false)
    })
    return Promise.all(solicitacoes).then(resultado => {
        return ninho.vizinhos.filter((_, i) => resultado[i])
    })
}

const {everywhere} = require("./crow-tech");

everywhere(ninho => {
    ninho.state.fofocas = []
})

function pegarFofocas(ninho, mensagem, excetoPara = null){
    ninho.state.fofocas.push(mensagem)
    for( let vizinho of ninho.vizinhos) {
        if(vizinho == excetoPara) continue
        solicitar(ninho, vizinho, "fofocas", mensagem)
    }
}

tipoDeSolicitacao("fofocas", (ninho,mensagem, fonte) => {
    if(ninho.state.fofoca.includes(message)) return
    console.log(`${ninho.name} recebido fofoca '${mensagem}' from ${fonte}`)
    pegarFofocas(ninho,mensagem,fonte)
})

tipoDeSolicitacao("connections", (ninho, {name,vizinhos}, fonte) => {
    let connections = ninho.state.connections
    if(JSON.stringify(connections.get(name)) == JSON.stringify(vizinhos)) return
    connections.set(name, vizinhos)
    conexaoDeTransmicao(ninho,name,fonte)
})

function conexaoDeTransmicao(ninho, name, excetoPara = null) {
    for( let vizinho of ninho.vizinhos) {
        if (vizinho == excetoPara) continue
        solicitar(ninho, vizinho, "connections", {
            name,
            vizinhos: ninho.state.connections.get(name)
        })
    }
}
everywhere(ninho => {
    ninho.state.connections = new Map
    ninho.state.connections.set(ninho.name, ninho.vizinhos)
    conexaoDeTransmicao(ninho, ninho.name)
})