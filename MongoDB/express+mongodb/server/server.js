const express = require("express")
const app = express()



require("dotenv").config()
require("./config/mongoose.config")
const port = process.env.PORT

const Routes = require("./routes/student.routes")
Routes(app)

app.listen(port,()=>{
    console.log(`>>>>>>server is running on port ${port}`)
})