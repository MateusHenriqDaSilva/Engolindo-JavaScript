const x = 1
function evalERetornaX(codigo){
    eval(codigo)
    return x
}

console.log(evalERetornaX("var x = 2"))
console.log(x)

let maisUm = Function("n", "return n + 1")
console.log(maisUm(4))

