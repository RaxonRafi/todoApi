const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({

    FirstName:{type:String},
    LastName:{type:String},
    Email:{type:String},
    Mobile:{type:String},
    UserName:{type:String,unique:true},
    Password:{type:String},

},{versionKey:false});

const UserModel = mongoose.model('profiles',DataSchema);
module.exports = UserModel;