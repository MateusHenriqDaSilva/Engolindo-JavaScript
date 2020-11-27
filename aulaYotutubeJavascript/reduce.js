array = [1,2,3,4,5,6]

const valorTotal = array.reduce((contador, acumulador, index, array) => {
    contador + acumulador
    if (index < array.length - 1) {
        return acumulador / array.length; 
    }
    return acumulador
})

console.log(valorTotal)

// map e filter
const resultado = array.map((valor) => {
    return valor * 2
})

console.log(resultado)

const valorResult = array.reduce((acumulador, contador) => {
    return [ ...acumulador, contador * 2]
    
}, [])
console.log(valorResult)

//filter
const valores = array.filter((valor)=> {
    return (valor % 2) === 0
})

console.log(valores)

const reducePar = array.reduce((acumulador, valor) => {
    acumulador.push(valor % 2 == 0? valor + " par" : valor + " impar" ) 
    return acumulador
}, []) 

console.log("reduce", reducePar)

//flatMap
const numerosDeNumeros = [[1,2,3], [1,2,3],[1,2,3]]

const flatMap = numerosDeNumeros.flatMap((valor) => {
    return valor
})

console.log("com flat map", flatMap)

const comMap = numerosDeNumeros.map((valor) => {
    return valor
})
console.log("map", comMap)

const comReduce = numerosDeNumeros.reduce((acumulador, valor) => {
    return acumulador.concat(valor)
}, [])
console.log("reduce", comReduce)

const usuarios = [
    {
        id: '001',
        nome: 'mateus henrique',
        sexo: 'M',
        estado: 'RJ'
    },{
        id: '002',
        nome: 'mateus henrique',
        sexo: 'M',
        estado: 'RJ'
    },{
        id: '003',
        nome: 'mateus henrique',
        sexo: 'M',
        estado: 'RJ'
    },{
        id: '004',
        nome: 'mateus henrique',
        sexo: 'M',
        estado: 'RJ'
    },{
        id: '005',
        nome: 'mateus henrique',
        sexo: 'M',
        estado: 'RJ'
    },{
        id: '006',
        nome: 'mateus henrique',
        sexo: 'F',
        estado: 'SP'
    },{
        id: '007',
        nome: 'mateus henrique',
        sexo: 'F',
        estado: 'SP'
    },{
        id: '008',
        nome: 'mateus henrique',
        sexo: 'F',
        estado: 'SP'
    },{
        id: '009',
        nome: 'mateus henrique',
        sexo: 'F',
        estado: 'SP'
    },{
        id: '010',
        nome: 'mateus henrique',
        sexo: 'F',
        estado: 'SP'
    }
]

reduzindoObjetos = usuarios.reduce((acumulador, valor) => {
    acumulador[valor.id] = valor
    return acumulador
}, {})

console.log(reduzindoObjetos)
console.log(reduzindoObjetos['001'])

const reduzindoPorSexo = usuarios.reduce((acumulador, valor) => {
    if (!acumulador[valor.sexo]) {
        acumulador[valor.sexo] = []
    }
    acumulador[valor.sexo].push(valor)
    return acumulador
}, {})

console.log(reduzindoPorSexo)

const reduzindoPorEstado = usuarios.reduce((acumulador, valor) => {
    if (!acumulador[valor.estado]) {
        acumulador[valor.estado] = []
    }
    acumulador[valor.estado].push(valor)
    return acumulador
}, {})

console.log(reduzindoPorEstado)

function agrupaPor(array, escolha){
    array.reduce((acumulador, valor) => {
        if (!acumulador[valor.escolha]) {
            acumulador[valor.escolha] = []
        }
        acumulador[valor.escolha].push(valor)
        return acumulador
    }, {})
}

console.log(agruparPor(usuarios, estado))