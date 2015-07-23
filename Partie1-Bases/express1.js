var express = require('express');

var app = express();
app.get('/',function(req,res){
    res.setHeader('Content-Type','text/plain');
    res.end("Hello world !");
});

app.get('/toto',function(req,res){
    res.setHeader('Content-Type','text/plain');
    res.end("Bonjour toto !");
});

//route dynamique
app.get('/livres/:id/',function(req,res){
    res.setHeader('Content-Type','text/html');
    res.render('livre.ejs',{id: req.params.id});
    //res.write('numéro:'+req.params.id);
    res.end();
});

app.get('/compteur/:nb',function(req,res){
    var noms = ['chris','toto','thomas','quentin'];
    res.setHeader('Content-Type','text/html');
    res.render('compteur.ejs',{nb: req.params.nb,noms: noms});
});


//template
app.get('/etage/:etagenum/chambre', function(req, res) {
    res.render('chambre.ejs', {etage: req.params.etagenum}); });

//gestion erreurs
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable');
   //res.send(404, 'Page introuvable !');
});

//middleware
/*app.use(express.logger()) // Active le middleware de logging
.use(express.static(__dirname + '/public')) // Indique que le dossier /public contient des fichiers statiques
.use(express.favicon(__dirname + '/public/favicon.ico')) // Active la favicon indiquée
.use(function(req, res){ // Répond enfin
        res.send('Hello');
    });*/

app.listen('8080');