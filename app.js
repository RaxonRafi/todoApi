const express = require('express');
const app  = new express();
const mongoose  = require('mongoose');
const router = require('./src/routes/api');

// Security module import

const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet')
const hpp = require('hpp')
const cors = require('cors')
const xss = require('xss-clean')
const bodyParser = require('body-parser')

// Security module implement

app.use(cors())
app.use(mongoSanitize())
app.use(helmet())
app.use(hpp())
app.use(xss())
app.use(bodyParser.json());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15*60*1000,
    max:3000,
});

app.use(limiter);

// Database Connection

const URI = "mongodb://localhost:27017/Todo";
const OPTIONS = {user:'',pass:'',autoIndex:true}
mongoose.connect(URI,OPTIONS)

//Routing 

app.use("/api/v1",router);

//invalid routes 
app.use("*",(req,res)=>{

    res.status(404).json({status:"invalid route",})

})


module.exports = app;