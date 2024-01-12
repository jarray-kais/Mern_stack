const express =require("express")
const app=express()
const cors =require("cors")
app.use(express.json(),express.urlencoded({ extended: true }),cors({origin : 'http://localhost:3000'}))


require("dotenv").config()
require("./config/mongoose.config")
const port = process.env.PORT

const Routes = require("./routes/routes.login")

Routes(app)


const server = app.listen(port, () => {
    console.log(`>>>>> Server is running on Port ${port}`)
})