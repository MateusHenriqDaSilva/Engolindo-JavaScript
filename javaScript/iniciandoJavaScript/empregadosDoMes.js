var funcionario = parseInt(lines.shift())
var horas = parseFloat(lines.shift())
var salario = parseFloat(lines.shift())

total = parseFloat((salario * horas))

console.log(`NUMBER = ${funcionario}\nSALARY = U$ ${total.toFixed(2)}`)