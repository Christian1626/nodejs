/**************
 * EVENEMENTS *
 **************/

var http=require('http');

//emettre un event
var EventEmitter = require('events').EventEmitter;
var jeu = new EventEmitter();
jeu.on('gameover', function(message){
	console.log(message); });
jeu.emit('gameover', 'Vous avez perdu !');

var server = http.createServer(function(req,res) {
	res.writeHead(200);


	res.end("Salut.");
});

server.on("close",function(){
	console.log("Bye !")
})


server.listen(8080);
console.log("Test");
server.close();