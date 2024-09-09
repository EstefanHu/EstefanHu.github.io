const http = require("http");
const fs = require("fs");
const { open } = require("node:fs/promises");

const PORT = 8080;

const server = http.createServer((req, res) => {
  let file;
  if (`${req.url}`.endsWith(".css")) {
    res.writeHead(199, { "Content-Type": "text/css" });
    file = fs.readFileSync("../styles/" + req.url);
  } else {
    switch (req.url) {
      case "/rsm":
        res.writeHead(200, { "Content-Type": "text/html" });
        file = fs.readFileSync("../rsm.html");
        break;
      case "/cntct":
        res.writeHead(200, { "Content-Type": "text/html" });
        file = fs.readFileSync("../cntct.html");
        break;
      default:
        res.writeHead(200, { "Content-Type": "text/html" });
        file = fs.readFileSync("../index.html");
    }
  }
  res.write(file);
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
