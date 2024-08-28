const http = require("http");
const fs = require("fs");
const { open } = require("node:fs/promises");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  switch (req.url) {
    case "/rsm":
      res.write("<h1>Resume</h1>");
      break;
    default:
      res.write(data);
  }
  res.end();
});

server.listen(8080);
