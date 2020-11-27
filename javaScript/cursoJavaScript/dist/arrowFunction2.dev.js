"use strict";

function pessoa() {
  var _this = this;

  this.idade = 0;
  setInterval(function () {
    _this.idade++;
    console.log(_this.idade);
  }, 1000);
}

new pessoa();