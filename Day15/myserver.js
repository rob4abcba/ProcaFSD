// include any libraries that are needed
let http = require("http");
// If you want to use import instead of require, then you need to
// add "type": "module", to your package.json.
// import http from 'node:http';
// import { createServer, request } from 'node:http';

// use those libraries to create a local http.Server to receive data from:
// let server = http.createServer(function (req, res) {
const server = http.createServer((req, res) => {
  // const proxy = createServer((req, res) => {

  // get the
  res.statusCode(200);

  // When headers have been set with response.setHeader(), they will be
  // merged with any headers passed to response.writeHead(), with the
  // headers passed to response.writeHead() given precedence.
  // res.setHeader("Content-Type", "text/html");

  // If progressive population of headers is desired with
  // potential future retrieval and modification,
  // use response.setHeader() instead of response.writeHead().

  // const headers = new Headers({ 'Content-Type': 'text/html' });
  // res.setHeaders(headers);
  res.setHeader("Content-Type", "text/html");
  res.setHeader("X-Foo", "bar");
  // response.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);
  // res.writeHead(200, { 'Content-Type': 'application/json' });
  res.writeHead(200, { "Content-Type": "text/plain" });
  // response.writeHead(200, {
  //   'Content-Length': Buffer.byteLength(body),
  //   'Content-Type': 'text/plain',
  // })
  // res.write('hello\n');
  res.statusMessage("status from server");
  // res.end();
  // res.end(JSON.stringify({
  //   data: 'Hello World!',
  // }));
  res.end("okay");
});

// server.on('clientError', (err, socket) => {
//   socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
// });

server.listen();
// server.listen(8000);
