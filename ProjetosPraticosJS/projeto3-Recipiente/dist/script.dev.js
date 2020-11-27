"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var refeicaos = document.getElementById("refeicao");
getAleatorioLanche();
fetchRefeicao();

function getAleatorioLanche() {
  var resposta, respostaData, refeicaoAleatoria;
  return regeneratorRuntime.async(function getAleatorioLanche$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://www.themealdb.com/api/json/v1/1/random.php"));

        case 2:
          resposta = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(resposta.json());

        case 5:
          respostaData = _context.sent;
          refeicaoAleatoria = respostaData.meals[0];
          adicionarRefeicao(refeicaoAleatoria, true);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getRefeicaoPorId(id) {
  var resp, respData, refeicao;
  return regeneratorRuntime.async(function getRefeicaoPorId$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id));

        case 2:
          resp = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(resp.json());

        case 5:
          respData = _context2.sent;
          refeicao = respData.meals[0];
          return _context2.abrupt("return", refeicao);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function getLanchePorPesquisa(pesquisa) {
  var todasRefeicao;
  return regeneratorRuntime.async(function getLanchePorPesquisa$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + pesquisa));

        case 2:
          todasRefeicao = _context3.sent;

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function adicionarRefeicao(refeicaoData) {
  var aleatorio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  console.log(refeicaoData);
  var refeicao = document.createElement("div");
  refeicao.classList.add("refeicao");
  refeicao.innerHTML = "<div class=\"lanche\">\n    <div class=\"refeicaoCabecalho\">\n        ".concat(aleatorio ? "\n            <span class=\"aleatorio\">\n            Recipiente Aleatorio\n        </span>" : "", "\n        <img src=\"").concat(refeicaoData.strMealThumb, "\" alt=\"").concat(refeicaoData.strMeal, "\">\n    </div>\n    <div class=\"lancheCorpo\">\n        <h4>").concat(refeicaoData.strMeal, "</h4> \n        <button class=\"lancheBotao onClick=\"\">\n            <i class=\"fas fa-heart\">\n            </i>\n        </button>\n    </div>\n</div>");
  var botao = refeicao.querySelector(".lancheCorpo .lancheBotao");
  botao.addEventListener("click", function () {
    if (botao.classList.contains('active')) {
      removeRefeicaoLs(refeicaoData.idRefeicao);
      botao.classList.remove("active");
    } else {
      addRefeicaoLs(refeicaoData.idRefeicao);
      botao.classList.add("active");
    }
  });
  refeicaos.appendChild(refeicao);
}

function addRefeicaoLs(refeicaoId) {
  var refeicaoIds = getRefeicaoLs();
  localStorage.setItem('refeicaoIds', JSON.stringify([].concat(_toConsumableArray(refeicaoIds), [refeicaoId])));
}

function removeRefeicaoLs(refeicaoId) {
  var refeicaoIds = getRefeicaoLs();
  localStorage.setItem('refeicaoId', JSON.stringify(refeicaoIds.filter(function (id) {
    return id !== refeicaoId;
  })));
}

function getRefeicaoLs() {
  var refeicaoIds = JSON.parse(localStorage.getItem('mealIds'));
  return refeicaoIds === null ? [] : refeicaoIds;
}

function fetchRefeicao() {
  var refeicaoIds, refeicaos, i, refeicaoId;
  return regeneratorRuntime.async(function fetchRefeicao$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          refeicaoIds = getRefeicaoLs();
          refeicaos = [];
          i = 0;

        case 3:
          if (!(i < refeicaoIds.length)) {
            _context4.next = 12;
            break;
          }

          refeicaoId = refeicaoIds[i];
          _context4.next = 7;
          return regeneratorRuntime.awrap(getRefeicaoPorId(refeicaoId));

        case 7:
          refeicao = _context4.sent;
          refeicaos.push(refeicao);

        case 9:
          i++;
          _context4.next = 3;
          break;

        case 12:
          console.log(refeicaos);

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  });
}