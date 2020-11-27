var angulo = 0;
function galeriaColecao(entrada) {
  colecao = document.querySelector("#colecao");
  if (!entrada) {
    angulo = angulo + 45;
  } else {
    angulo = angulo - 45;
  }
  colecao.setAttribute(
    "style",
    "-webkit-transform: rotateY(" +
      angulo +
      "deg); -moz-transform: rotateY(" +
      angulo +
      "deg); transform: rotateY(" +
      angulo +
      "deg);"
  );
}
