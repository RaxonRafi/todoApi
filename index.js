const app = require('./app');
const dotenv = require('dotenv');
 dotenv.config();

//  console.log(process.env.RUNNING_PORT)

app.listen(process.env.RUNNING_PORT,function(){

    console.log("App Running at port: "+process.env.RUNNING_PORT);

})