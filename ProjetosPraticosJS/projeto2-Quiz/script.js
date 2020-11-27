const quizData = [
  {
    questao: "qual a idade do brasil?",
    a: "10",
    b: "17",
    c: "110",
    d: "120",
    correta: "c",
  },
  {
    questao: "qual a linguagem mais popular 2020?",
    a: "java",
    b: "c",
    c: "python",
    d: "javaScript",
    correta: "d",
  },
  {
    questao: "qual o presidente do brasil?",
    a: "bolsonaro",
    b: "marina",
    c: "lula",
    d: "cesar",
    correta: "a",
  },
  {
    questao: "qual a linguagem mais popular 2020",
    a: "java",
    b: "c",
    c: "python",
    d: "javaScript",
    correta: "d",
  },
  {
    questao: "qual a linguagem mais popular 2020",
    a: "java",
    b: "c",
    c: "python",
    d: "javaScript",
    correta: "d",
  },
  {
    questao: "qual o presidente de paulistania",
    a: "helio",
    b: "paulo augusto",
    c: "casaca",
    d: "lavora",
    correta: "b",
  },
  {
    questao: "quantos anos paulistania tem?",
    a: "11",
    b: "12",
    c: "13",
    d: "14",
    correta: "c",
  },
];

const quiz = document.getElementById('quiz')
const campoResposta = document.querySelectorAll(".resposta");
const questaoTexto = document.getElementById("questaoTexto");
const a_texto = document.getElementById("a_texto");
const b_texto = document.getElementById("b_texto");
const c_texto = document.getElementById("c_texto");
const d_texto = document.getElementById("d_texto");
const botaoFinalizar = document.getElementById("submit");

let acumulacaoQuiz = 0;
let placar = 0;

loadQuiz();

function loadQuiz() {
  descelecionandoResposta();
  const acumulacaoQuizData = quizData[acumulacaoQuiz];
  questaoTexto.innerText = acumulacaoQuizData.questao;

  a_texto.innerText = acumulacaoQuizData.a;
  b_texto.innerText = acumulacaoQuizData.b;
  c_texto.innerText = acumulacaoQuizData.c;
  d_texto.innerText = acumulacaoQuizData.d;
}

function getSelecionado() {
  let resposta = undefined;
  campoResposta.forEach((respostaSelecionada) => {
    if (respostaSelecionada.checked) {
      resposta = respostaSelecionada.id;
    }
  });

  return resposta;
}

function descelecionandoResposta() {
  campoResposta.forEach((resposta) => {
    resposta.checked = false;
  });
}

botaoFinalizar.addEventListener("click", () => {
  const resposta = getSelecionado();
  if (resposta) {
      if(resposta === quizData[acumulacaoQuiz].correta) {
          placar ++
      }
    acumulacaoQuiz++;
    if (acumulacaoQuiz < quizData.length) {
      loadQuiz();
    } else {
        quiz.innerHTML = `<h2> Media de Acerto: ${placar} / ${quizData.length} </h2>`
    }
  }
});
