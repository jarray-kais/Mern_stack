const  LoginController = require("../controllers/controller.login")

module.exports=(app=>{
    app.post("/api/register",LoginController.CreatNewUtilisateur)
    app.get("/api/register",LoginController.FindAllUtilisteur)
    app.post("/api/login",LoginController.login)
    app.delete("/api/register",LoginController.deleteAll)

})