"use strict";

function contarLetras(palavra, letra) {
  var palavraTeste = palavra.toUpperCase();
  console.log(palavraTeste);
  var contarPalavra = 0;

  for (var contador = 0; contador <= palavraTeste.length - 1; contador++) {
    if (palavra[contador] == letra) {
      contarPalavra++;
    }
  }

  return contarPalavra;
}

console.log(contarLetras('diego da edi', 'd'));