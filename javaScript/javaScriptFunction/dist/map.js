const array = [1,2,3,4,5,6]

console.log(array.map((elemento) => {
    return elemento * 2
}))
console.log(array)

const estudantes = [
    {name: 'Jaque', nota: 3.4},
    {name: 'Susan', nota: 4.4},
    {name: 'Emma', nota: 10.0},
    {name: 'Petter', nota: 7.4}
]

const filtrar = (estudantes.map((elemento) => {
    return elemento.nota
}))

console.log(filtrar.map(Math.ceil))

console.log(filtrar.filter((elemento) => {
    return elemento > 5
}))
