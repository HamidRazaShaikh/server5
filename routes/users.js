var express = require("express");
var api = express.Router();
var schema = require('./schema');
var UserModel = schema.UserModel;


var o = {
    name: "Hello User",
    email: "asadas@gmail.com",
};


setTimeout(function () {
    UserModel.find().exec(function (error, data) {
        console.log(error);
        console.log(data);
    })


    console.log(88);
   /* var user = new UserModel(o);
    user.save().then(function (error, data) {
        console.log(error);
        console.log(data);
    });*/
}, 5000)


api.get('/get', function (req, res) {
    res.send({data: data})
    console.log(data);
});

api.post('/post', function (req, res) {
    data.push(req.body);
    console.log(req.body);
    res.send({status: 200, data: data})
});

module.exports = api;