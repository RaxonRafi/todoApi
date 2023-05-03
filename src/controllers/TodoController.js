const TodoModel = require('../models/TodoModel');

exports.CreateTodo=(req,res)=>{

    let reqBody = req.body;

    TodoModel.create(reqBody).then((result)=>{

        res.send({Status:"Successfully Created",data:result})

    }).catch((error)=>{

           res.send({Status:"Fail",data:error})

    })


}

exports.SelectTodo=(req,res)=>{

    let UserName = req.body['username'];
    TodoModel.find({username:UserName}).then((result)=>{

        res.status(200).json({Status:"Todo List found!",data:result});

    }).catch((error)=>{

        res.status(404).json({Status:"Todo List not found!",data:error});

    })
}

