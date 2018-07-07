var http = require("http");

var http_server = http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end("This is My first node JS");

});

http_server.listen(8888);

console.log("my first JS Server is starting, http://127.0.0.1:8888");