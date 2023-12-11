const { text } = require("express")
const mongoose = require("mongoose")


const Product = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "the titleis required"]
    },
    price : {
        type : Number,
        required: [true, "the titleis required"]
    },
    description : {
        type : String,
        required: [true, "the titleis required"]
    }
},{timestamps : true})

module.exports = Products=mongoose.model("Products" , Product )