var express = require('express');
var hbs = require('hbs');
var app = express();

app.use(express.static(__dirname +'/public'));

app.set('view-engine', 'hbs');

app.get('/home', function(req, res){
    res.render('home.hbs');
})

app.get('/music', function(req, res){
    res.render('music.hbs');
})


app.listen(3000);