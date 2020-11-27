"use strict";

var _require = require("http"),
    createServer = _require.createServer;

var server = createServer(function (request, response) {
  response.writeHead(200, {
    "Content-Type": "text/html"
  });
  response.write("\n    <h1>Hello!</h1>\n    <p>You asked for <code>".concat(request.url, "</code></p>"));
  response.end();
});
server.listen(8000);
console.log("Listening! (port 8000)");