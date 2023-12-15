const mongoose = require("mongoose")


const Athors = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "the name should be shorter then 3 characters  "]
    }
}, { timestamps: true })




module.exports = Athor= mongoose.model("Athor", Athors)