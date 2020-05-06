var express = require('express');
var bodyParser = require('body-parser');
var mongoDB = require('mongodb').MongoClient;
var hbs = require('hbs');

var app = express();
app.use(express.static(__dirname +'/public'));

app.set('view engine','hbs');

app.use( bodyParser.urlencoded());

var url = 'mongodb://localhost:27017';
var db;

mongoDB.connect(url, {useUnifiedTopology: true, useNewUrlParser: true }, function(error, client){
    if(error)
        throw error;
    db = client.db('attainu');
});

app.get('/instructors', function(req, res){
    res.render('instructor.hbs');
})

app.get('/students', function(req, res){
    res.render('index.hbs');
})
 
app.post('/addstudent/add', function(req, res){
    db.collection('students').insertOne(req.body, function(error, result){
        if(error)
            throw error;
        res.redirect('/allstudents');
        console.log("New student Successfully Added!");    
    })
})

app.get('/allstudents', function(req, res){
    db.collection('students').find({}).toArray(function(error, result){
        if(error)
            throw error;
        res.render('students.hbs', {
            student: result
        });
    });
})



app.listen(3000);