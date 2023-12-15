const express = require("express")

const cors = require('cors') 
const app = express()

app.use(express.json(), express.urlencoded({ extended: true }),cors({ //cors is going to allow different ports to send requests to our API
    origin:"http://localhost:3000" 
}));


require("dotenv").config()
require("./config/mongoose.config")

const port = process.env.PORT

const Routes = require("./routes/athor.routes")
Routes(app)


app.listen(port, () => {
    console.log(` Server is running on Port ${port} `)
})