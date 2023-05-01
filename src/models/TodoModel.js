const mongoose = require('mongoose');

const DataSchema =  mongoose.Schema({

    username:{type:String},
    subject:{type:String},
    description:{type:String},
    status:{type:String,default:"new"},
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()}

},{versionKey:false})

const TodoModel = mongoose.model('todolists',DataSchema);
module.exports = TodoModel;