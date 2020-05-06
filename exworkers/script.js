// Initializing all dependencies

var express = require('express');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var mongoClient = require('mongodb').MongoClient;
var session = require('express-session');

// Initializing empty Express app

var app = express();

//  Initializing session

app.use(session({
    secret: "indianLeo"
}));

// setting mongo URL

var url = 'mongodb://localhost:27017';

var db;

mongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    if(err)
        throw err;
    db = client.db('exworkers');
})

// setting view engine as HBS

app.set('view engine', 'hbs');

// express public folder

app.use(express.static(__dirname + '/public'));

// bodyparser initialization

app.use(bodyParser.urlencoded({extended: true}));


// all routes 

app.get('/', function(req, res){
    res.render('home.hbs');
})

app.get('/login', function(req, res){
    res.render('login.hbs');
})

app.get('/post', function(req, res){
    res.render('postjob.hbs');
})

app.get('/alljobs', function(req, res){
    db.collection('alljobs').find({}).toArray(function(err, result){
        if(err)
            throw err;
        res.render('alljobs.hbs', {
            allposts: result,
        });
    });
})

//var alljobs = [];

app.post('/posts', function(req, res){

    // alljobs.push(req.body);
    // res.redirect('/alljobs');
    // console.log(req.body);

    db.collection('alljobs').insertOne(req.body, function(err, result){
        if(err)
            throw err;
        res.redirect('/alljobs');
    });
})


// authentication and login logic

// app.post('/auth', async function(req, res){

//     var user = await db.collection('auth').findOne({ name: req.body.username , password: req.body.password });

//     if (user && user.name == req.body.username && user.password == req.body.password) {
//         res.send("Credentials Match");
//     } else {
//         res.send("Wrong Credentials");
//     }
//     console.log(req.body);
// })

app.post('/auth', async function(req, res) { // note the async keyword here
    try {
        var user = await db.collection('auth').findOne({ name: req.body.username , password: req.body.password });

        if (user && user.name == req.body.username && user.password == req.body.password) {
            res.send("Credentials Match");
        } else {
            res.send("Wrong Credentials");
        }
        console.log(req.body);
    }
    catch (err) {
        console.log('Exception >>\n', err); // log the error
        res.send("Something wrong has happened while checking the credentials");
    }
})

//Signup login

app.post('/sign_up', function(req,res){ 
    var name = req.body.username; 
    var email =req.body.email; 
    var pass = req.body.password; 
  
    var data = { 
        "name": name, 
        "email":email, 
        "password":pass 
    } 
    db.collection('auth').insertOne(data, function(err, result){ 
        if (err) 
            throw err; 
        console.log("Record inserted Successfully");              
    }); 
          
    res.send("Signed up successfully"); 
})







// port for listening

app.listen(3000);





