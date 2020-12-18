const mongoose = require("mongoose")

const StuSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    rollno:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    score:{
        type:Number,
        default:0
    }


})
module.exports = mongoose.model('Student',StuSchema)