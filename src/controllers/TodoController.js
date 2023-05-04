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
exports.SelectTodoByStatus=(req,res)=>{

    let status = req.body['status'];
    TodoModel.find({status:status}).then((result)=>{

        res.status(200).json({Status:"Todo List found!",data:result});

    }).catch((error)=>{

        res.status(404).json({Status:"Todo List not found!",data:error});

    })
}
exports.SelectTodoByDate=(req,res)=>{

    let username = req.headers['username'];
    let from = req.body['from'];
    let to = req.body['to'];
    TodoModel.find({username:username},{created_at:{$gte:Date(from),$lte:Date(to)}}).then((result)=>{

        res.status(200).json({Status:"Todo List found!",data:result});

    }).catch((error)=>{

        res.status(404).json({Status:"Todo List not found!",data:error});

    })
}

exports.UpdateTodo=(req,res)=>{

    let subject = req.body['subject'];
    let description = req.body['description'];
    let updated_at = Date.now();
    let id = req.body['_id'];

    let PostBody =
    {
        subject:subject,
        description:description,
        updated_at:updated_at

    }

    TodoModel.updateOne({_id:id},{$set:PostBody},{upsert:true}).then((result)=>{

        res.status(200).json({Status:"Updated Successfully!",data:result})

    }).catch((error)=>{

        res.status(400).json({Status:"Update failed!",data:error})
    })
}
exports.UpdateTodoStatus=(req,res)=>{

    let status = req.body['status'];
    let updated_at = Date.now();
    let id = req.body['_id'];

    let PostBody =
    {
        status:status,
        updated_at:updated_at

    }

    TodoModel.updateOne({_id:id},{$set:PostBody},{upsert:true}).then((result)=>{

        res.status(200).json({Status:"Status Updated Successfully!",data:result})

    }).catch((error)=>{

        res.status(400).json({Status:"Update failed!",data:error})
    })
}

exports.DeleteTodo=(req,res)=>{


    let id = req.body['_id'];

    TodoModel.deleteOne({_id:id}).then((result)=>{

        res.status(200).json({Status:"Todo deleted Successfully!",data:result})

    }).catch((error)=>{

        res.status(400).json({Status:"delete failed!",data:error})
    })
}

