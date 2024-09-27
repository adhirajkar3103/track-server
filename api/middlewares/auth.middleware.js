import { User } from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const protectAuth = async (req,res,next)=>{
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(401).send({status: false, message:'User must be logged in!'})
    }
    const token = authorization.replace('Bearer ','');
    jwt.verify(token, process.env.JWT_SECRET, async (err,payload)=>{
        if(err){
            return res.status(401).send({status: false, message:'User must be logged in!'})
        }
        const {userId} = payload;
        const user = await User.findById(userId);
        req.user = user;
        next()
    })
}