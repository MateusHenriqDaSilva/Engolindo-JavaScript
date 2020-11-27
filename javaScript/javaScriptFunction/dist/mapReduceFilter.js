const estudantes = [
    {name: 'Jaque', nota: 3.4},
    {name: 'Susan', nota: 4.4},
    {name: 'Emma', nota: 10.0},
    {name: 'Petter', nota: 9.4}
]

const melhoresEstudantes = estudantes.map((elemento) => {
    return elemento.nota
})

console.log(melhoresEstudantes.filter((elemento) => {
    return elemento > 9
}))

console.log(melhoresEstudantes.reduce((acumulador, elemento, indice, array) => {
    if(indice === array.length - 1) {
        return (acumulador + elemento) / array.length 
    } else {
        return (acumulador + elemento)
    }
}))