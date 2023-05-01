const TodoModel = require('../models/TodoModel');

exports.CreateTodo=(req,res)=>{

    let reqBody = req.body;

    TodoModel.create(reqBody).then((result)=>{

        res.send({Status:"Successfully Created",data:result})

    }).catch((error)=>{

           res.send({Status:"Fail",data:error})

    })


}

