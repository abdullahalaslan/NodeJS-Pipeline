var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.write('baris abi nolur gitme :/');
res.end();
});
server.listen(8080);
