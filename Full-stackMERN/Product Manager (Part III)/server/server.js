const express = require ('express');
const app = express();
const cors = require('cors') 
const socket = require('socket.io');

app.use(express.json(), express.urlencoded({ extended: true }),cors());

require("dotenv").config()
require("./config/mongoose.config")
const port = process.env.PORT


const Routes = require("./routes/routes.product")

Routes(app)



const server = app.listen(port, () => {
    console.log(`>>>>> Server is running on Port ${port}`)
})
const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});
io.on("connection", socket => {
 
    console.log('socket id: ' + socket.id);
    socket.on("event_from_client", data => {
        socket.broadcast.emit("event_to_all_other_clients", data);
    });
});