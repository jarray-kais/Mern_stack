const mongoose = require("mongoose")


const LoginSchema =new mongoose.Schema({
    name : {
        type: String,
        required :[ true,"the name is required"]
    },
    email : {
        type: String,
        required :[ true,"the email is required"]
    } , 
    password : {
        type: String,
        required :[ true,"the password is required"]
    }

},{timestamps : true})

module.exports = Login=mongoose.model("Login" , LoginSchema )