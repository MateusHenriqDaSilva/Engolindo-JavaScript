"use strict";

function todas_promessa(promessa) {
  return new Promise(function (resolver, rejeitar) {
    var resultado = [];
    var pendente = promessa.length;

    var _loop = function _loop(i) {
      promessa[i].then(function (resultado) {
        resultado[i] = resultado;
        pendente--;
        if (pendente == 0) resolver(resultado);
      })["catch"](rejeitar);
    };

    for (var i = 0; i < promessa.length; i++) {
      _loop(i);
    }

    if (promessa.length == 0) resolver(resultado);
  });
} // Test code.


todas_promessa([]).then(function (array) {
  console.log("isso deveria ser []:", array);
});

function logo(valor) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve(valor);
    }, Math.random() * 500);
  });
}

todas_promessa([logo(1), logo(2), logo(3)]).then(function (array) {
  console.log("isso deveria ser [1, 2, 3]:", array);
});
todas_promessa([logo(1), Promise.reject("X"), logo(3)]).then(function (array) {
  console.log("Não devemos chegar aqui.");
})["catch"](function (error) {
  if (error != "X") {
    console.log("Falha inesperada:", error);
  }
});