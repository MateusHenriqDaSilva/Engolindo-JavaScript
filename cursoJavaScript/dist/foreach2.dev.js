"use strict";

Array.prototype.forEach2 = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

var lg = ['taco', 'fer', 'fallen', 'fnx', 'coldzera'];
lg.forEach2(function (elemento, index) {
  console.log(index + 1, elemento);
});