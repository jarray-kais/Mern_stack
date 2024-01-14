const mongoose = require("mongoose")


const LoginSchema =new mongoose.Schema({
    name : {
        type: String,
        required :[ true,"the name is required"]
        
    },
    email : {
        type: String,
        required :[ true,"the email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
          }
          
    } , 
    password : {
        type: String,
        required :[ true,"the password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    }

},{timestamps : true})

module.exports = Login=mongoose.model("Login" , LoginSchema )