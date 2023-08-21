const mongoose =require('mongoose')
const mongoURL = "mongodb://127.0.0.1/company1";
const connectToMongo = async()=>{
    try{
        await mongoose.connect(mongoURL)
        console.log("connected to mongo successful");
    }
    catch(err){
        console.log("connect to mongo unsuccessful",err)
    }
}
module.exports=connectToMongo;