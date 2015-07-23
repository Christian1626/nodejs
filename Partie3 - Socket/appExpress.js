var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');


app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

//gestion erreurs
app.use(function(req, res, next){
    res.redirect('/');
});

// Chargement de socket.io
var io = require('socket.io').listen(server);

// Quand on client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !');

    socket.emit('message','Vous êtes connecté !');
    socket.broadcast.emit('message', 'Un autre client vient de se connecter !');
    var pseudo = '';

    var pseudo = prompt('Quel est votre pseudo ?');
    socket.emit('pseudo',pseudo);

    socket.on('pseudo', function(pseudo) {
        console.log('nouvel utilisateur:'+pseudo);
        socket.pseudo = pseudo;
    });

    socket.on('message', function (message) {
        console.log('Poke du client ' +socket.pseudo);
    });
});

server.listen(8080);



