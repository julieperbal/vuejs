setTimeout(function() {
console.log('Coucou'); // écrit un message dans la console au bout de deux secondes
}, 2000);
console.log('toi'); // écrit un message dans la console

var http = require('http');
var port = 8080;
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('Salut tout le monde !');
res.end();
}).listen(port);
console.log("Serveur tourne sur http://localhost:"+port);
