/**
 * Created by Cricri on 16/07/2015.
 */

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.get('/',function(req,res){
    res.sendfile(__dirname + '/index.html');
});

app.use(function(req,res,next){
    res.redirect('/');
});

io.sockets.on('connection',function(socket){
    console.log('Client connecté');

    socket.on('new_user',function(user){
        console.log('nouvelle utilisateur:'+user);
        socket.user = user;
        socket.broadcast.emit('new_user',user);
    });

    socket.on('comment',function(comment){
        console.log('nouveau commentaire('+socket.user+'):'+comment);
        socket.broadcast.emit('new_comment',socket.user,comment);
    });

    socket.on('disconnect',function(){
        console.log('Client déconnecté: '+socket.user);
        socket.broadcast.emit('user_disconnect',socket.user);
    });
});








server.listen(8080);