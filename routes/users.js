var express = require("express");
var api = express.Router();

var data = [];

api.get('/hello',function (req,res) {
    res.send({data: data})
    console.log(data);
});

api.post('/hello',function (req,res) {
    data.push(req.body);
    console.log(req.body);
    res.send({status: 200, data: data})
});

module.exports = api;