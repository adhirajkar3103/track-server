import mongoose from "mongoose";

const pointSchema = new mongoose.Schema({
    timestamp: Number,
    coords:{
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number
    }
})

const trackSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name:{
        type: String,
        default: ''
    },
    locations: [pointSchema]
},{timestamps :true})

export const Track = mongoose.model('Track',trackSchema);
