const PlayerController = require('../controllers/player.controller')

module.exports=(app)=>{
    app.get("/api/player", PlayerController.FindAllPlayers)
    app.post("/api/player", PlayerController.CreatNewPlayer)
    app.delete("/api/player/:id", PlayerController.deleteOnePlayer)
    app.patch("/api/player/:id", PlayerController.updateExistingPlayer)
}