var express = require ('express');
var bodyParser = require ('body-parser');
var cors = require ('cors');
var app = express ();

var data = [];

app.use(bodyParser.json({limit:'5000kb'}));
app.use (bodyParser.urlencoded({extended : false}));
app.use (cors ());

app.get('/get',function (req,res) {
    res.send ({data : data})
    console.log(data);
});

app.post ('/post', function (req,res) {
    data.push(req.body);
    console.log(req.body);
    res.send({status : 200 , data: data})
});

app.set ('port', process.env.PORT || 4000);
var server = app.listen ( app.get('port'),function () {
    console.log("this is server"+" "+ server.adress().port)
});



