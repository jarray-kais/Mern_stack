const express = require ('express');
const app = express();
const cors = require('cors') 

app.use(express.json(), express.urlencoded({ extended: true }),cors({ //cors is going to allow different ports to send requests to our API
    origin:"http://localhost:3000" 
}));

require("dotenv").config()
require("./config/mongoose.config")
const port = process.env.PORT


const Routes = require("./routes/routes.product")

Routes(app)



app.listen(port, () => {
    console.log(`>>>>> Server is running on Port ${port}  🎈🎈🎈`)
})