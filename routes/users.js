var express = require("express");
var api = express.Router();

var data = [];

api.get('/get',function (req,res) {
    res.send({data: data})
    console.log(data);
});

api.post('/post',function (req,res) {
    data.push(req.body);
    console.log(req.body);
    res.send({status: 200, data: data})
});

module.exports = api;