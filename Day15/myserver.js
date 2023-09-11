// include any libraries that are needed
let http = require("http");

// use those libraries and create a http.Server
let server = http.createServer(function (req, res) {
  // get the
  res.statusCode(200);
  res.setHeader("Content-Type", "text/html");
  res.statusMessage("status from server");
  res.end();
});

server.listen();
