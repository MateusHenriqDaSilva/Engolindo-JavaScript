function todas_promessa(promessa) {
  return new Promise((resolver, rejeitar) => {
    let resultado = [];
    let pendente = promessa.length;
    for (let i = 0; i < promessa.length; i++) {
      promessa[i]
        .then((resultado) => {
          resultado[i] = resultado;
          pendente--;
          if (pendente == 0) resolver(resultado);
        })
        .catch(rejeitar);
    }
    if (promessa.length == 0) resolver(resultado);
  });
}
// Test code.
todas_promessa([]).then((array) => {
  console.log("isso deveria ser []:", array);
});

function logo(valor) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(valor), Math.random() * 500);
  });
}
todas_promessa([logo(1), logo(2), logo(3)]).then((array) => {
  console.log("isso deveria ser [1, 2, 3]:", array);
});
todas_promessa([logo(1), Promise.reject("X"), logo(3)])
  .then((array) => {
    console.log("Não devemos chegar aqui.");
  })
  .catch((error) => {
    if (error != "X") {
      console.log("Falha inesperada:", error);
    }
  });
