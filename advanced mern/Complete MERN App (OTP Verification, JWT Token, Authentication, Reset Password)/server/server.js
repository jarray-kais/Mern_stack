import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './config/mongoose.config.js';
import router from './router/router.js'



const app = express();
/**middlwares */
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-by')  //less hackers know about our stack


/** HTTP GET request */
app.get('/',(req,res)=>{
    res.status(201).json('Home GET Request')
})

/** api routes */
app.use('/api', router)

const port = 8000;

/**start server only when we have valid connection */
connect().then(()=>{
    try{
app.listen(port, () => {
    console.log(`>>>>> Server is running on Port ${port}`)
})
} catch (error){
    console.log("cannot connect to the server")
}

}).catch(error =>{
        console.log("Invalid database connection...!")

})
