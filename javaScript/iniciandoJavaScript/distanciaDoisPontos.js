var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var item1 = lines.shift().split(' ');
var item2 = lines.shift().split(' ')

var x1 = item1.shift() 
var y1 = item1.shift()

var x2 = item2.shift()
var y2 = item2.shift()

var distancia = Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2))

console.log(distancia.toFixed(4))