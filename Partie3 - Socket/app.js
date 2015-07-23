var http = require('http');
var fs = require('fs');

// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(content); });
});


// Chargement de socket.io
var io = require('socket.io').listen(server);

// Quand on client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !');

    socket.emit('message','Vous êtes connecté !');
    socket.broadcast.emit('message', 'Un autre client vient de se connecter !');
    var pseudo = '';


    socket.on('pseudo', function(pseudo) {
        console.log('nouvel utilisateur:'+pseudo);
        socket.pseudo = pseudo;
    });

    socket.on('message', function (message) {
        console.log('Poke du client ' +socket.pseudo);
    });
});




server.listen(8080);