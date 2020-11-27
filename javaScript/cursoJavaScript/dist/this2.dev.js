"use strict";

function pessoa() {
  this.idade = 0;
  var self = this;
  setInterval(function () {
    self.idade++;
    console.log(self.idade);
  }, 1000);
} //.bind(this)


new pessoa();