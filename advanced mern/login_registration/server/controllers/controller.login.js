const Login = require("../models/model.login")


module.exports.CreatNewUtilisateur=(req,res)=>{
    Login.create(req.body)
    .then(CreatNewUtilisateur=>{
        res.json({new:CreatNewUtilisateur})
    })
    .catch(err => {
        res.status(400).json(err)
    })
}
module.exports.FindAllUtilisteur = (req, res) => {
    Login.find()
        .then((result) => {
            console.log(result)
            res.json(result)
        })

    }
    module.exports.deleteAll = (req, res) => {
        Login.deleteMany()
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    module.exports.login =(req,res)=>{
        const  {email, password}=req.body
        Login.findOne({email:email}).then(user=>{
            if(user){
                if(user.password===password){
                    res.json("success")
                }
                else {
                        res.json("the password is incorrect")
                }
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })

    }