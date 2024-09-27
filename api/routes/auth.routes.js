import express from 'express'
import { User } from '../models/user.model.js';
import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
const router = express.Router()

router.post('/signup',async(req,res)=>{
    try {
        const {email, password} = req.body;
        const user = await User.create({email,password})
        const token =  jwt.sign({userId: user._id},process.env.JWT_SECRET)
        return res.status(201).send({status: true, token})
    } catch (error) {
        return res.status(400).send({status:false,message: error.message})
    }
})

router.post('/login', async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(422).send({status: false, message:'Must provide email & password'})
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(422).send({status: false, message:'User does not exist'})
    }
    const isValid = await user.comparePassword(password)
    if(isValid){
        const token =  jwt.sign({userId: user._id},process.env.JWT_SECRET)
        return res.status(200).send({status: true, token})
    }else{
        return res.status(422).send({status: false, message:'Invalid credentials'})
    }
})


export default router;