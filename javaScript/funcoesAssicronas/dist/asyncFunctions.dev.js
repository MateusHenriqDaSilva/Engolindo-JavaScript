"use strict";

function localizarBisturi(ninho) {
  var corrent, proximo;
  return regeneratorRuntime.async(function localizarBisturi$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          corrent = ninho.name;

        case 1:
          _context.next = 3;
          return regeneratorRuntime.awrap(qualquerArmazenamento(ninho, corrent, "bisturi"));

        case 3:
          proximo = _context.sent;

          if (!(proximo == corrent)) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", corrent);

        case 6:
          corrent = proximo;

        case 7:
          _context.next = 1;
          break;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}

function localizarBisturi2(ninho) {
  function loop(corrent) {
    return qualquerArmazenamento(ninho, corrent, "bisturi").then(function (proximo) {
      if (proximo == corrent) return corrent;else return loop(proximo);
    });
  }

  return loop(ninho.name);
}

localizarBisturi(bigOak).then(console.log);
localizarBisturi2(bigOak).then(console.log);