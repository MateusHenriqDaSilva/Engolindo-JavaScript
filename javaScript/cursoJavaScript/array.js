console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia','Pedro','Ana')
console.log(aprovados)

aprovados = ['diego', 'mateus', 'ana']
console.log(aprovados)
console.log("nome: ",aprovados[0])

console.log("nome: ",aprovados[2])
aprovados[3] = 'joao'
aprovados.push('carolina')
console.log(aprovados)
console.log(aprovados.sort())
console.log(aprovados.length)

delete aprovados[1]
console.log(aprovados)

aprovados.splice(1,1,'elemento1','elemento2')
console.log(aprovados)
aprovados.splice(1,2,'denner','miranda')
console.log(aprovados)
