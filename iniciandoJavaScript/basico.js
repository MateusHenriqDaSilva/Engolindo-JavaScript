//Leia 2 variáveis, denominada A e B e faça a soma dessas 
//duas variáveis, atribuindo seu resultado à variável X. 
//Imprimir X como mostrado abaixo. Imprima a linha final 
//após o resultado caso contrário, 
//você receberá "Erro de apresentação".
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift())
var B = parseInt(lines.shift())
var x = a + b


console.log("X = ", x)   