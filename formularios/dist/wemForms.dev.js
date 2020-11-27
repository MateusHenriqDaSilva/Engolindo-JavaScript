"use strict";

var url = "https://eloquentjavascript.net/author";
var types = ["text/plain", "text/html", "application/json", "application/rainbows+unicorns"];

function showTypes() {
  var _i, _types, type, resp;

  return regeneratorRuntime.async(function showTypes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _i = 0, _types = types;

        case 1:
          if (!(_i < _types.length)) {
            _context.next = 16;
            break;
          }

          type = _types[_i];
          _context.next = 5;
          return regeneratorRuntime.awrap(fetch(url, {
            headers: {
              accept: type
            }
          }));

        case 5:
          resp = _context.sent;
          _context.t0 = console;
          _context.t1 = "".concat(type, ": ");
          _context.next = 10;
          return regeneratorRuntime.awrap(resp.text());

        case 10:
          _context.t2 = _context.sent;
          _context.t3 = _context.t1.concat.call(_context.t1, _context.t2, "\n");

          _context.t0.log.call(_context.t0, _context.t3);

        case 13:
          _i++;
          _context.next = 1;
          break;

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
}

showTypes();