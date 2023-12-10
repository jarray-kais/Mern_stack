const studentsController = require("../controllers/student.controller")

module.exports = (app) =>{
    app.get("/api/student/",studentsController.findAllStudent)

}