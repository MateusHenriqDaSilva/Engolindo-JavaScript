"use strict";

var quaseArray = {
  0: 'Rafael',
  1: 'ana',
  2: 'bia'
};
console.log(quaseArray);
Object.defineProperty(quaseArray, "toString", {
  value: function value() {
    return Object.values(this);
  },
  enumerable: false
});
console.log(quaseArray[0]);
var meuArray = ['rafael', 'ana', 'bia'];
console.log(quaseArray.toString(), meuArray);