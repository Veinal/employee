const MySchema = require('../model/empSchema');
const Insert = async(req,res)=>{
    try{
        const {name,age,phone,designation,salary}=req.body;
        let checkphone = await MySchema.findOne({phone});
        if (checkphone){
            console.log("This number already exists... try another number")
            return res.status(400).json({errors:"Phone number already exists"})

        }else{
            const data = await new MySchema({name,age,phone,designation,salary});
            const savedData = await data.save();
            console.log("Insertion successful")
            res.send({"Insertion success":true,savedData});
        }
        
    }
    catch(error){
        console.error("some error occured"+error)
        res.status(500).json("some internal error!!!")
    }
}

const View = async(req,res)=>{
    try{
        const data = await MySchema.find()
        console.log(data)
        res.json(data);
        
    }
    catch(error){
        console.error("some error occured"+ error)
        res.status(500).json("some internal error!!!")
    }
}

const Delete = async(req,res) =>{
    try{
        let data = await MySchema.findById(req.params.id);
        if(!data){
            console.log("Data not found with this ID");
            return res.status(404).send("Data does not exist with this ID");

        }
        else{
            data = await MySchema.findByIdAndDelete(req.params.id);
            console.log("Data deleted successfully....");
            res.json({"success":true,"deleted data":data})
        }
    }
    catch(error){
        console.error("some error occured"+ error)
        res.status(500).json("some internal error!!")
    }
}

const Singleview = async(req,res) =>{
    try{
        let data= await MySchema.findById(req.params.id);
        if(!data){
            console.log("Data not found with this ID")
            return res.status(404).json("Data does not exist with this ID")
        }
        else{
            console.log(data);
            res.json(data);
        }
    }
    catch(error){
        console.error("some error occured")
        res.status(500).json("Sone internal error!!!")
    }
}

const Update = async(req,res)=>{
    const {name,age,phone,designation,salary} = req.body;
    try{
        const newData ={}
        if(name){newData.name=name}
        if(age){newData.age=age}
        if(phone){newData.phone=phone}
        if(designation){newData.designation=designation}
        if(salary){newData.salary=salary}

        let data = await MySchema.findById(req.params.id)
        if(!data){
            console.log("Data not found with this Id")
            return res.status(404).json("Data does not exist with this Id")
        }else{
            data = await MySchema.findByIdAndUpdate(req.params.id,{$set:newData});
            res.json(data);
        }
    }
    catch(error){
        console.error("some error occured")
        res.status(500).json("some internal error!!!")
    }
}
module.exports = {Insert,View,Delete,Singleview,Update};