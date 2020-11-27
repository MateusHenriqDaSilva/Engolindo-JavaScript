"use strict";

var carrosTotal = [];

function adicionarCarros(carros, vendido) {
  return carrosTotal.push({
    carros: carros,
    vendido: vendido
  });
}

adicionarCarros(['ferrari', 'lamborguine', 'uno'], false);
adicionarCarros(['golf', 'yamaha', 'suzuki'], false);
adicionarCarros(['palio', 'chevete', 'onix'], true);
console.log(carrosTotal);