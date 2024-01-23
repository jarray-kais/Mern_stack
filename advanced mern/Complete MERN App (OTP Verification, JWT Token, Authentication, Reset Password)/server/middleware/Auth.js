import  Jwt  from "jsonwebtoken";
import ENV from "../config.js"


/**auth middleware */
export default async function Auth(req,res,next){
    try {
        //access authorize header to validate request
        const token =req.headers.authorization.split(" ")[1]

        //retrive the user details for the logged in user 
        const decodedToken = await Jwt.verify(token, ENV.JWT_SECRET);

        req.user= decodedToken;

        next()

    } catch (error) {
        res.status(401).json({error : "Authentication Failed!"})
    }
}
export function localVaribles(req,res,next){
    req.app.locals={
        OTP : null ,
        resetSession : false

    }
    next()
 }

