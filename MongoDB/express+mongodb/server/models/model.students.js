const mongoose =require("mongoose")

const Student= new mongoose.Schema({
    firstName:{
        type : String ,
        required : [true, "the firstname is required"] 
    },
    LastName:{
        type : String ,
        required : [true, "the lastname is required"] 
    },
    age : {
        type : Number ,
        required : [true, "Age  is required"]
    }
},{timestamps : true}
)

module.exports.studentSchema = mongoose.model("studentSchema",Student)