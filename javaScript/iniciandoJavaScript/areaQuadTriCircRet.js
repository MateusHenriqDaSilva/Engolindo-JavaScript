// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split(' ');

var a = parseFloat(3.0)
var b = parseFloat(4.0)
var c = parseFloat(5.2)

var triangulo = a*c/2
var circulo = 3.14159 * Math.pow(c, 2)
var trapezio = ((a+b)/2)*c
var quadrado = b*b
var retangulo = a*b

console.log(`TRIANGULO: ${(triangulo.toFixed(3))}`) 
console.log(`CIRCULO: ${circulo.toFixed(3)}`)
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
console.log(`RETANGULO: ${retangulo.toFixed(3)}`)
