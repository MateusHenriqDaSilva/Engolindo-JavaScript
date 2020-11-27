var funcionario = lines.shift()
var salario = parseFloat(lines.shift())
var vendas = parseFloat(lines.shift())

total = parseFloat((vendas * 15) / 100) + salario

console.log(`TOTAL = R$ ${total.toFixed(2)}`)