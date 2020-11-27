"use strict";

var estudantes = [{
  name: 'Jaque',
  nota: 3.4
}, {
  name: 'Susan',
  nota: 4.4
}, {
  name: 'Emma',
  nota: 10.0
}, {
  name: 'Petter',
  nota: 9.4
}];
var melhoresEstudantes = estudantes.map(function (elemento) {
  return elemento.nota;
});
console.log(melhoresEstudantes.filter(function (elemento) {
  return elemento > 9;
}));
console.log(melhoresEstudantes.reduce(function (acumulador, elemento, indice, array) {
  if (indice === array.length - 1) {
    return (acumulador + elemento) / array.length;
  } else {
    return acumulador + elemento;
  }
}));