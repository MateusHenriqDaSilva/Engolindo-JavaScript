//A fórmula para calcular a área de uma circunferência 
//é definida como A = π . R2. 
//Considerando este problema que π = 3,14159:
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var r = parseFloat(lines.shift())
var a = 3.14159 * r*r
console.log(`A=${a.toFixed(4)}`)