const http = require("http");
const server = http.createServer((req, res) => {
  console.log("User was connected");
  res.writeHead(400, { "content-type": "text/html" });
  res.write("<h2>Ressource not found<p> ");
  res.end();
});
server.listen(5000);
