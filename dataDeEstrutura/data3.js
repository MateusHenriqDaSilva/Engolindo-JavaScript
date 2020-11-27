let carrosTotal = []

function adicionarCarros(carros, vendido){
    carrosTotal.push({carros, vendido})
}

adicionarCarros(['ferrari', 'ferrari', 'uno'], false)
adicionarCarros(['golf', 'ferrari', 'suzuki'], false)
adicionarCarros(['palio', 'onix', 'onix'], true)


console.log(carrosTotal)

function phiElemento(elemento, carros){
    let valor = [0,0,0,0]
    for (let i = 0; i < carros.length; i++){
        let entrada = carros[i], index = 0
        if(entrada.carros.includes(elemento)) index += 1
        if(entrada.vendido) index += 2
        valor[index] += 1
    }
    return valor
}
console.log(phiElemento("ferrari", carrosTotal))

for(let contador = 0; contador < carrosTotal.length; contador++){
    let entrada = carrosTotal[contador]
    console.log(entrada)
}
// for of
console.log('for of')
for(elemento of carrosTotal){
    console.log(elemento)
    console.log('elemento', elemento.vendido)
}

console.log('carrosVendidos')
function carrosListados(carros) {    
    let carrosListado = []
    for(let elemento of carros) {
        for(let carros of elemento.carros) {
            if(!carrosListado.includes(carros)) {
                carrosListado.push(carros)
            }
        } 
    }
    return carrosListado
}
console.log(carrosListados(carrosTotal))

function phi(valor) {
    return (valor[3] * valor[0] - valor[2] * valor[1]) / 
        Math.sqrt((valor[2] + valor[3]) * 
                  (valor[0] + valor[1]) *
                  (valor[1] + valor[3]) *
                  (valor[0] + valor[2]))
}

console.log(phi([76,9,4,1]))

for(let carros of carrosListados(carrosTotal)) {
    console.log(carros, + ":" , phi(phiElemento(carros, carrosTotal)))
}
