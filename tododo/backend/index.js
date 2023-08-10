const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors')

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/abc',{family:4} )
.then(()=>console.log('db connected'))

 let userSchema=mongoose.Schema( {
    name:String,
    email:String,
    password:String
 })

 let userModel=mongoose.model("users",userSchema)


 app.post("/addUser",async(req,res)=>{
    let obj= await userModel(req.body);
          obj.save()
        res.send('data saved')
        });
    
    app.get('/login',async (req,res)=>{
        let {email, password }=req.body
            let data=await userModel.find({email,password})
        
            if(data.length>0){
                res.send('login succes full')
            }else{
                res.send('wrong email')
            }
    })








app.listen(5000,()=>console.log('connected'))
