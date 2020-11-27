"use strict";

var quizData = [{
  questao: "qual a idade do brasil?",
  a: "10",
  b: "17",
  c: "110",
  d: "120",
  correta: "c"
}, {
  questao: "qual a linguagem mais popular 2020?",
  a: "java",
  b: "c",
  c: "python",
  d: "javaScript",
  correta: "d"
}, {
  questao: "qual o presidente do brasil?",
  a: "bolsonaro",
  b: "marina",
  c: "lula",
  d: "cesar",
  correta: "a"
}, {
  questao: "qual a linguagem mais popular 2020",
  a: "java",
  b: "c",
  c: "python",
  d: "javaScript",
  correta: "d"
}, {
  questao: "qual a linguagem mais popular 2020",
  a: "java",
  b: "c",
  c: "python",
  d: "javaScript",
  correta: "d"
}, {
  questao: "qual o presidente de paulistania",
  a: "helio",
  b: "paulo augusto",
  c: "casaca",
  d: "lavora",
  correta: "b"
}, {
  questao: "quantos anos paulistania tem?",
  a: "11",
  b: "12",
  c: "13",
  d: "14",
  correta: "c"
}];
var quiz = document.getElementById('quiz');
var campoResposta = document.querySelectorAll(".resposta");
var questaoTexto = document.getElementById("questaoTexto");
var a_texto = document.getElementById("a_texto");
var b_texto = document.getElementById("b_texto");
var c_texto = document.getElementById("c_texto");
var d_texto = document.getElementById("d_texto");
var botaoFinalizar = document.getElementById("submit");
var acumulacaoQuiz = 0;
var placar = 0;
loadQuiz();

function loadQuiz() {
  descelecionandoResposta();
  var acumulacaoQuizData = quizData[acumulacaoQuiz];
  questaoTexto.innerText = acumulacaoQuizData.questao;
  a_texto.innerText = acumulacaoQuizData.a;
  b_texto.innerText = acumulacaoQuizData.b;
  c_texto.innerText = acumulacaoQuizData.c;
  d_texto.innerText = acumulacaoQuizData.d;
}

function getSelecionado() {
  var resposta = undefined;
  campoResposta.forEach(function (respostaSelecionada) {
    if (respostaSelecionada.checked) {
      resposta = respostaSelecionada.id;
    }
  });
  return resposta;
}

function descelecionandoResposta() {
  campoResposta.forEach(function (resposta) {
    resposta.checked = false;
  });
}

botaoFinalizar.addEventListener("click", function () {
  var resposta = getSelecionado();

  if (resposta) {
    if (resposta === quizData[acumulacaoQuiz].correta) {
      placar++;
    }

    acumulacaoQuiz++;

    if (acumulacaoQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = "<h2> Media de Acerto: ".concat(placar, " / ").concat(quizData.length, " </h2>");
    }
  }
});