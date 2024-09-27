import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import { connectDB } from './config/db.js'
import authRoutes from './routes/auth.routes.js'
import trackRoutes from './routes/track.routes.js'
import { protectAuth } from './middlewares/auth.middleware.js'

const app = express()
connectDB()

app.use(cors())
app.use(express.json())

app.use('/auth',authRoutes);
app.use('/tracks', trackRoutes);

app.get('/',protectAuth,(req,res)=>res.send(`Protected route ${req.user._id}`))

const PORT= process.env.PORT || 5000
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))