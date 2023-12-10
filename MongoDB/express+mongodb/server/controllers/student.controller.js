const Student = require("../models/model.students")


//read all

module.exports.findAllStudent = (req,res)=>{
    Student.find()
    .then((AllStudents)=>{
        console.log(AllStudents)
        res.json({AllStudents})
    })
    .catch(err =>{
        res.json({message:"wait a minute"})
    })
}