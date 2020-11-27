"use strict";

//criando triangulo
for (var i = '#'; i.length <= 7; i += '#') {
  console.log(i);
} //criando Ola Mundo 


for (var _i = 0; _i < 100; _i++) {
  if (_i % 3 == 0) console.log('Ola');
  if (_i % 5 == 0) console.log('Mundo');
  if (_i % 3 == 0 && _i % 5 == 0) console.log('Ola Mundo');
}

var caracter = '';

for (var coluna = 0; coluna <= 8; coluna++) {
  for (var linha = 0; linha <= 8; linha++) {
    if ((linha + coluna) % 2 == 0) {
      caracter += '#';
    } else {
      caracter += ' ';
    }
  }

  caracter += '\n';
}

console.log(caracter);