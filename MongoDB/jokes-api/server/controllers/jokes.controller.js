//import the model
const joke = require("../models/model.jokes")
//-----CRUD

module.exports.FindAllJokes = (req, res) => {
    // db.joke.find()
    jokeSchema.find()
        .then((AllJokes) => {
            console.log(AllJokes)
            res.json(AllJokes)
        })
        .catch(err => { res.json({ message: "Wait a minute 🙄🙄" ,err}) })
    }
    //Create new joke
    module.exports.CreatNewJokes=(req,res)=>{
        jokeSchema.create(req.body)
        .then(CreateJoke=>{
            res.json({newJoke : CreateJoke})
        })
        .catch(err => { res.json({ message: "Wait a minute 🙄🙄",err}) })
    }
    //find one joke
    module.exports.FindOneJoke = (req,res)=>{
        jokeSchema.findOne({_id : req.params.id})
        .then(Onejoke=>{
            res.json(Onejoke)
        })
        .catch(err => { res.json({ message: "Wait a minute 🙄🙄" ,err}) })
    }
    //update  joke
    module.exports.UpdateJoke=(req,res)=>{
        console.log(req.body);
        jokeSchema.findOneAndUpdate({ _id : req.params.id }, req.body)
        .then(result =>{
            console.log(result)
            res.json({"done" : result})
            console.log(result)
        })
        .catch(err => { res.json({ message: "Wait a minute 🙄🙄" ,err}) })
    }
    //delete
    module.exports.DeleteJoke=(req,res)=>{
        jokeSchema.deleteOne({_id:req.params.id})
        .then(result=>{
            res.json(result)
        })
        .catch((err) => {
            res.json(err)
        })
    }