import express from 'express'
import {protectAuth} from '../middlewares/auth.middleware.js'
import { Track } from '../models/track.models.js'
const router = express.Router()

router.use(protectAuth)

router.get('/',async (req,res)=>{
    const tracks = await Track.find({userId: req.user._id})
    res.send(tracks)
})

router.post('/', async (req,res)=>{
    const {name,locations} = req.body;
    if(!name || !locations){
        return res.status(422).send({status: false, message: 'You must provide namd & location'})
    }
    try {
        const track = await Track.create({name, locations, userId: req.user._id})
        res.send(track)
    } catch (error) {
        res.status(422).send({status: false, message: error.message})
    }

})


export default router;