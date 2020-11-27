var tempo = parseInt(lines.shift())
var km = parseInt(lines.shift())

var total = (tempo * km) / 12

console.log(total.toFixed(3))