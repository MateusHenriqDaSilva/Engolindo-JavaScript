"use strict";

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.filter(function (elemento) {
  return elemento % 2 == 0;
}));