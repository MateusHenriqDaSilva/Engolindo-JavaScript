"use strict";

var array = [1, 2, 3, 4, 5, 6];
console.log(array.map(function (elemento) {
  return elemento * 2;
}));
console.log(array);
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
  nota: 7.4
}];
var filtrar = estudantes.map(function (elemento) {
  return elemento.nota;
});
console.log(filtrar.map(Math.ceil));
console.log(filtrar.filter(function (elemento) {
  return elemento > 5;
}));