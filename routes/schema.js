var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String},
    phone: {type: String},
    age: {type: Number},

});

exports.UserModel = mongoose.model("Users", UserSchema);