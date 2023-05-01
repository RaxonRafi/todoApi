const jwt = require('jsonwebtoken');

const UserModel = require('../models/UserModel');

exports.UserRegister=(req,res)=>{

    let reqBody = req.body;

    UserModel.create(reqBody).then((result)=>{

        res.send({Status:"Success",data:result})

    }).catch((error)=>{

           res.send({Status:"Fail",data:error})

    })

    

}
exports.UserLogin=(req,res)=>{

    let Username = req.body['UserName'];
    let Password = req.body['Password'];

    UserModel.find({UserName:Username,Password:Password}).then((data)=>{

        if(data.length>0){

            let payload = {

                exp: Math.floor(Date.now() / 1000) + (60 * 60*48),
                data:data[0]
            }

            var token = jwt.sign({payload,data}, 'RaxonRafi');

            res.send({Status:"Login Successfully",token:token,data:data})

        }else{

            res.send({Status:"Fail"})


        }

    }).catch((error)=>{

        res.send({Status:"Fail",data:error})

    })

    

}

exports.UserProfile=(req,res)=>{

    let Username = req.headers['username'];

    UserModel.find({UserName:Username}).then((data)=>{

        if(data.length>0){

            res.send({Status:"User Profile",data:data})

        }else{

            res.send({Status:"Fail"})

        }

    }).catch((error)=>{

        res.send({Status:"Fail",data:error})

    })

}
exports.UpdateProfile=(req,res)=>{

    let UserName=req.headers['username']
    let reqBody=req.body;
    
    UserModel.updateOne({UserName:UserName},{$set:reqBody},{upsert:true}).then((result)=>{

        res.status(200).json({status:result});


    }).catch((error)=>{

        res.status(400).json({status:error});
        
    })
}
