var http=require('http');
var url = require("url");
var querystring = require("querystring");

//http://localhost:8080/pagetoto?nom=leroy&prenom=chris


var server = http.createServer(function(req,res) {
	//page appelée
	var page = url.parse(req.url).pathname;
	console.log(page);
	//parametre de la page
	var params = querystring.parse(url.parse(req.url).query);
	console.log(params);
	res.writeHead(200,{"Content-Type":"text/html"});

	res.write('<!DOCTYPE html>'+
		'<html>'+
		' <head>'+
		' <meta charset="utf-8" />'+
		' <title>Ma page Node.js !</title>'+
		' </head>'+
		' <body>'+
		' <p>Voici un paragraphe <strong>HTML</strong> !</p>'+
		'<p> la page est :' + page +
		' </body>'+
		'</html>');
	res.end();
});


server.listen(8080);