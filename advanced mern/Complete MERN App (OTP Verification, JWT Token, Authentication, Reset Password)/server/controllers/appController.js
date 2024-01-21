import UserModel from "../model/User.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import ENV from '../config.js'


/**middlware for verify user */
export async function verifyUser(req , res , next){
    try{
        const {username} =req.body == "GET"? req.query : req.body;
        let exist =await UserModel.findOne({username})
        if(!exist) return res.status(400).send({err :"can't find user!"})
        next()
    
    }
    catch{
        return res.status(404).send({error : "Authentication error"})
    }
}

/** POST: http://localhost:8000/api/register 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
  "email": "example@gmail.com",
  "firstName" : "bill",
  "lastName": "william",
  "mobile": 8009860560,
  "address" : "Apt. 556, Kulas Light, Gwenborough",
  "profile": ""
}
*/
export async function register(req,res){
    try{
        const {username , password , profile ,email} =req.body
        //check the existing user
        const existUsername= new Promise((resolve , reject)=>{
            UserModel.findOne({username},function(err,user){
                if(err) reject(new Error(err))
                if(user) reject({error : "please use unique username"})
                resolve()
            })
        })
        //check for exixting email
        const existEmail= new Promise((resolve , reject)=>{
            UserModel.findOne({email},function(err,email){
                if(err) reject(new Error(err))
                if(email) reject({error : "please use unique email"})
                resolve()
            })
        })

        Promise.all([existUsername , existEmail])
        .then(()=>{
            if(password){
                bcrypt.hash(password , 10)
                    .then(hashedPassword =>{
                        const user = new UserModel({
                            username,
                            password : hashedPassword , 
                            profile : profile || '',
                            email
                        })
                        //return save result as a response
                        user.save()
                        .then(result =>res.status(201).send({ msg: "User Register Successfully"}))
                        .catch(err =>res.status(500).send({err}))

                    }).catch(err=>{
                        return res.status(500).json({err : "Enable to hashed password"})
                    })
            }

        }).catch(err =>{
            return res.status(500).json(err)
        })

    }
    catch(error){
        return res.status(500).json(error)

    }
}




/** POST: http://localhost:8000/api/login 
 * @param: {
  "username" : "example123",
  "password" : "admin123"
}
*/
export async function login(req,res){
    const {username , password} = req.body
    try {
        UserModel.findOne({username})
        .then(user =>{
            bcrypt.compare(password , user.password)
                .then(passwordCheck =>{
                    if(!passwordCheck) return res.status(400).send({error : "Don't have password"})
                    const token =jwt.sign({
                            userId : user._id ,
                            username : user.username
                    },ENV.JWT_SECRET , {expiresIn : "24h"});
                    return res.status(200).send({
                        msg :"Login secceful...!",
                        username : user.username,
                        token
                    })
                })
                .catch(error =>{
                    res.status(400).send({error : "pasword does not much"})
                })
        })
        .catch(error =>{
            res.status(400).send({error : "username not found"})
        })

    }
    catch(error){
        
            return res.status(500).json(error)

    }
}


/** GET: http://localhost:8000/api/user/example123 */
export async function getUser(req,res){
    const {username} = req.params
    try {
        if(!username)return res.status(501).json({err :"Invalid username"})

        UserModel.findOne({username}, function(err , user){
            if(err) return res.status(501).json({err})
            if(!user) return res.status(501).json({err :"couldn't find the User"})
            /**remove password from user */
        const {password , ...rest} = Object.assign({},user.toJSON())
        return res.status(201).json(rest)
        })
        
    } catch (error) {
        res.status(404).json({err :"cannot find User data"})
    }
}


/** PUT: http://localhost:8000/api/updateuser 
 * @param: {
  "id" : "<userid>"
}
body: {
    firstName: '',
    address : '',
    profile : ''
}
*/
export async function updateUser(req,res){
    try {
        
       const id = req.query.id;

        if(id){
            const body = req.body;

            // update the data
            UserModel.updateOne({ _id : id }, body, function(err, data){
                if(err) throw err;

                return res.status(201).send({ msg : "Record Updated...!"});
            })

        }else{
            return res.status(401).send({ error : "User Not Found...!"});
        }

    } catch (error) {
        return res.status(401).send({ error });
    }
}



/** GET: http://localhost:8000/api/generateOTP */
export async function generateOTP(req,res){}




/** GET: http://localhost:8000/api/verifyOTP */
export async function verifyOTP(req,res){}



// successfully redirect user when OTP is valid
/** GET: http://localhost:8000/api/createResetSession */
export async function createResetSession(req,res){}




// update the password when we have valid session
/** PUT: http://localhost:8000/api/resetPassword */
export async function resetPassword(req,res){}