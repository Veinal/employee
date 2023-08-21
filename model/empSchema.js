const mongoose = require('mongoose')
const {Schema} = mongoose
const MySchema = new Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    designation:{
        type:String,
        require:true
    },
    salary:{
        type:Number,
        require:true
    }
})
module.exports = mongoose.model("employee2",MySchema)