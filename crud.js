const mongoose = require('mongoose')
const {Schema} = mongoose;
const Employee = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:false
    },
    designation:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }, 
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports= mongoose.model("tables",Employee)