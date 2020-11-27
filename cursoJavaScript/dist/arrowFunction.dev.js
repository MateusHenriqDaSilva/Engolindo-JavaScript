"use strict";

var drobro = function drobro(a) {
  return 2 * a;
};

dobro = function dobro(a) {
  return 2 * a;
};

dobro = function dobro(a) {
  return 2 * a;
}; //return implicito


console.log(dobro(Math.PI));
console.log(dobro(2));

var ola = function ola() {
  return console.log("ola");
};

ola();

ola = function ola(_) {
  return 'ola';
}; // possui um parametro


console.log(ola());