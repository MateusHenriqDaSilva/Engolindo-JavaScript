var item1 = lines.shift().split(' ')
var item2 = lines.shift().split(' ')

var cod1 = item1.shift() 
var quantidade1 = item1.shift()
var preco1 = item1.shift()

var cod2 = item2.shift() 
var quantidade2 = item2.shift()
var preco2 = item2.shift()

var total = (quantidade1 * preco1) + (quantidade2 * preco2)
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)