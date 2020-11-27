class lancamento {
    constructor(joia = "colar", preco = 0) {
        this.joia = joia
        this.preco = preco
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) { //...concatena todos os paramentros em array
        // lancamentos.forEach((elemento) => {
        //     return this.lancamentos.push(elemento)
        // })
        lancamentos.map((elemento) => {
            this.lancamentos.push(elemento)
        }) 
    }
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.filter((elemento) => {
            valorConsolidado += elemento.preco
        })
        return valorConsolidado
    }
}

const colar1 = new lancamento('colar1', 400)
const colar2 = new lancamento('colar2', 500)

const valorCompradoNoMes = new CicloFinanceiro(6, 2018)
console.log(valorCompradoNoMes)
valorCompradoNoMes.addLancamentos(colar1, colar2)
console.log(valorCompradoNoMes)
console.log(valorCompradoNoMes.sumario())

