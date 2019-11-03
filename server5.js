var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var cors = require('cors');
var mongoose = require("mongoose");


// var uri = "mongodb+srv://admin:admin@hamid-yq7y8.mongodb.net/test?retryWrites=true&w=majority";
var uri = "mongodb://elms:elms@ds025419.mlab.com:25419/elms";
mongoose.connect(uri , {useNewUrlParser: true});

var db = mongoose.connection;

db.on('connection',function () {
    console.log("Connected to mongodb");
});



var users = require('./routes/users');
var app = express();


app.use(bodyParser.json({limit: '5000kb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use('/users', users);

app.set('port', process.env.PORT || 4000);
var server = app.listen(app.get('port'), function () {
    console.log("this is server" + " " + server.address().port)
});



