var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.write('Hello Hepsiburada from Abdullah');
res.end();
});
server.listen(8080)