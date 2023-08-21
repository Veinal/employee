const express = require('express')
const connectToMongo = require('./db')
const Employee= require('./crud')

const app = express();
app.use(express.json());

app.use('/api/employee',require('./router/empRoute'))

port=7000;
app.listen(port,()=>{
    console.log("app is listening on port number "+ port)
})

connectToMongo()

app.post('/api/insert',async(req,res)=>{
    try{
        const {name,email,phone,address,designation,salary}=req.body;
        const data=new Employee({name,email,phone,address,designation,salary});
        const savedData= await data.save()
        res.send({"insetion success":true,savedData})
    }
    catch(error){
        console.error("some internal error" + error)
        res.status(500).json("Some internal error")
    }
})