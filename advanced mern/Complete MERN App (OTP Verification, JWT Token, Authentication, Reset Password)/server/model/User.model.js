import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username : {
        type : String , 
        required : [true , "please provide unique Username"],
        unique : [true ,"Username Exist"]
    },
    password : {
        type : String ,
        required : [true , "please provide a password"],
        unique : false 
    },
    email :{
        type : String ,
        required : [true ,"please provide a unique email"],
        unique : true
    },
    firstName: { type: String},
    lastName: { type: String},
    mobile : { type : Number},
    address: { type: String},
    profile: { type: String},


},{timestamps : true})

export default mongoose.model.Users || mongoose.model('User', UserSchema);