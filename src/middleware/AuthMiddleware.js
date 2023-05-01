const jwt = require('jsonwebtoken');

module.exports=(req,res,next)=>{

    const token = req.headers['token'];

    jwt.verify(token,'RaxonRafi',function(error,result){


            if(error){

                res.send({result:"Invalid Token"})
           
            }else{

                let username = result['data']['UserName']
                req.headers.username = result['data'][0]['UserName'];
             
                next()
            }

        
    })

}