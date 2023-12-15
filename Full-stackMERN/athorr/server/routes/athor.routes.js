const AthorController = require("../controllers/athor.controller")


module.exports = (app) => {
    app.get("/api/athor",AthorController.FindAllAthor)
    app.post("/api/athor",AthorController.CreatNewAthor)
    app.patch("/api/athor/:id",AthorController.updateExistingAthor)
    app.delete("/api/athor/:id",AthorController.deleteOneAthor)
}