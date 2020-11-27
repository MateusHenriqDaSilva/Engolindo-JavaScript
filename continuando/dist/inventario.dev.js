"use strict";

function mostrarNumerosZeroAntes(numero, label) {
  var numeroString = String(numero);

  while (numeroString.length < 3) {
    numeroString = "0" + numeroString;
  }

  console.log("".concat(numeroString, " ").concat(label));
}

function mostrarInventarioFazenda(vaca, galinha, porco) {
  mostrarNumerosZeroAntes(vaca, "vaca");
  mostrarNumerosZeroAntes(galinha, "galinha");
  mostrarNumerosZeroAntes(porco, "porco");
}

mostrarInventarioFazenda(7, 11, 13);

function arredondandoInventario(numero, casasDecimais) {
  var string = String(numero);

  while (string.length < casasDecimais) {
    string = '0' + string;
  }

  return string;
}

function mostrarInventario(vaca, galinha, porco) {
  console.log(arredondandoInventario(vaca, 4), "vaca");
  console.log(arredondandoInventario(galinha, 4), "galinha");
  console.log(arredondandoInventario(porco, 4), "porco");
}

mostrarInventario(7, 16, 3);