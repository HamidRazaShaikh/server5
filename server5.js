var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var users = require('./routes/users');
var app = express();

var data = [];

app.use(bodyParser.json({limit: '5000kb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use('/users', users);

app.set('port', process.env.PORT || 4000);
var server = app.listen(app.get('port'), function () {
    console.log("this is server" + " " + server.address().port)
});



