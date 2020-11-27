function comandosDirecao(questao) {
  let resultado = prompt(questao);
  if (resultado.toLowerCase() == "left") return "L";
  if (resultado.toLowerCase() == "rigth") return "R";
  throw new Error("invalido direcao: " + resultado);
}

function olhar() {
  if (comandosDirecao("qual eh") == "L") {
    return "casa";
  } else {
    return "dois ursos";
  }
}

try {
  console.log("vou olhar, ", olhar());
} catch (error) {
  console.log("olhe para voce ver o error" + error);
}

