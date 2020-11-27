var distancia = parseInt(lines.shift())
var combustivel = parseFloat(lines.shift())

total = distancia/combustivel

console.log(total.toFixed(3) + " km/l")