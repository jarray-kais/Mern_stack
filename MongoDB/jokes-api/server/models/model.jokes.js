//import mongoose to build the model
const mongoose=require('mongoose')


//the models -the rules the entries need to follow
const joke = new mongoose.Schema({
    setup:{
        type : String ,
        required : [true, "the type is required"] 
    },
    punchline:{
        type : String ,
        required : [true, "the type is required"] 
    }
}
,{timestamps : true})//creted at and updated at
jokeSchema = mongoose.model("jokeSchema",joke)
module.exports = jokeSchema