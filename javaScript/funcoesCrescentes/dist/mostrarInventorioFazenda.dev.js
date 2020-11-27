"use strict";

function mostrarInventorioFazenda(vacas, galinhas) {
  var vacaString = String(vacas);

  while (vacaString.length < 3) {
    vacaString = "0" + vacaString;
  }

  console.log("".concat(vacaString, " vaca"));
  var galinhaString = String(galinhas);

  while (galinhaString.length < 3) {
    galinhaString = "0" + galinhaString;
  }

  console.log("".concat(galinhaString, " galinhas"));
}

mostrarInventorioFazenda(7, 11);