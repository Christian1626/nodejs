/**
 * Created by Cricri on 12/07/2015.
 */

var express = require('express');
var app = express();
var cookieSession = require('cookie-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


app.use(cookieParser())
    .use(cookieSession({secret: 'todotopsecret'}))
    .use(bodyParser.json()) //accès formulaire
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .use(function(req,res,next){
        if(typeof (req.session.todolist) == 'undefined') {
            req.session.todolist = [];
        }
        next();
    });

app.get('/todo',function(req,res){
    res.setHeader('Content-Type','text/html');
    res.render('todo.ejs',{todolist:req.session.todolist});
}).post('/todo/ajouter',function(req,res){
    res.setHeader('Content-Type','text/html');
    if(req.body.tache != '') {
        req.session.todolist.push(req.body.tache);
    }
    res.redirect('/todo');
}).get('/todo/supprimer/:id',function(req,res){
    res.setHeader('Content-Type','text/html');
    if(req.params.id != '') {
        req.session.todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
}).use(function(req, res, next){
    res.setHeader('Content-Type', 'text/html');
    res.status(404).send('Page introuvable');
}).listen('8080');

