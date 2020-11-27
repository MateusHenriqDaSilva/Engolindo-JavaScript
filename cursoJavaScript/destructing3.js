function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const objNumerico = { max: 50, min: 40}
console.log(rand(objNumerico))
console.log(rand({}))

function random2(min = 0, max = 1000) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(random2())