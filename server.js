const http = require("http");
const fs = require("fs");
const { open } = require("node:fs/promises");

const PORT = 8080;

const server = http.createServer((req, res) => {
  let file;
  switch (req.url) {
    case "/styles/global.css":
      res.writeHead(200, { "Content-Type": "text/css" });
      file = fs.readFileSync("./styles/global.css");
      break;
    case "/styles/index.css":
      res.writeHead(200, { "Content-Type": "text/css" });
      file = fs.readFileSync("./styles/index.css");
      break;
    case "/rsm":
      res.writeHead(200, { "Content-Type": "text/html" });
      file = fs.readFileSync("./rsm.html");
      break;
    default:
      res.writeHead(200, { "Content-Type": "text/html" });
      file = fs.readFileSync("./index.html");
  }
  res.write(file);
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
