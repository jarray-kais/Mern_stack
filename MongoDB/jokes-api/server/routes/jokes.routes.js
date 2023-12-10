const JokeController = require ("../controllers/jokes.controller")

module.exports =(app)=>{
    app.get("/api/jokes", JokeController.FindAllJokes)
    app.get("/api/jokes/:id" , JokeController.FindOneJoke)
    app.patch("/api/jokes/:id" , JokeController.UpdateJoke)
    app.post("/api/jokes", JokeController.CreatNewJokes)
    app.delete("/api/jokes/:id", JokeController.DeleteJoke)

}
