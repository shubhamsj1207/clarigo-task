const express=require('express');
const users=require("../model/usermod");
const validationuser=require("../validation/usersvalidation")
const Joi=require('joi');
const userrouter=new express.Router();
const jwt=require('jsonwebtoken');
const multer=require('multer');


userrouter.post("/addusers",async(req,res)=>{
    try{
        const tokenauth=req.header('Authorization');
        console.log("token recieved",tokenauth);
        if (!tokenauth) {
            return res.status(200).json({
                        success: false,
                        message: "Error!Token was not provided."
                    }); 
                          
        }
        const token=tokenauth.split(' ')[1];
        console.log("here is the token " ,token);
        try{
            const decoded=jwt.verify(token,"xyz");
            console.log("token decoded",decoded);
        }catch (error) {
            res.status(401).send('invalid token'); 
            console.log('invalid token'); 
            return;
                    
            }
   console.log(req.body);
    const data=req.body;
    const result=validationuser(data);
    if(result.error){
        console.log('response from joi',result.error.details[0].message);
        const errormessage=result.error.details[0].message;
        return res.status(404).send(errormessage);       
    }
    
    const adduser= new users(req.body);
    const insertuser= await adduser.save();
    res.status(201).send('user successfully added');
    
    }catch(err){
        res.status(501).send('some errore occured'+err)
    }
});
 
/*userrouter.post("/uploads/image",upload.single(' '),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
   return res.send('single file');

});

const uploadStorage = multer({ storage: storage });

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
     return cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
    return  cb(null, Date.now() + "-" + file.originalname)
    },
  })
*/


userrouter.get("/showdata",async(req,res)=>{
    try{
        const tokenAuth = req.header('Authorization');
       // const token = req.headers.authorization.split(' ')[1];
        console.log('token received', tokenAuth);
        if (!tokenAuth) {
            return res.status(200).json({
                        success: false,
                        message: "Error!Token was not provided."
                    }); 
                           
        }
        const token = tokenAuth.split(' ')[1];
        console.log('here is the token', token);
        try {
        const decoded = jwt.verify(token, "xyz");
        console.log('decode token', decoded);
    } catch (error) {
         res.status(401).json({ error: 'Invalid token' });
        console.log('invalid token');
        
        }
    //Authorization: 'Bearer TOKEN'
        const showuser= await users.find({});
        res.send(showuser);
    }catch(err){
         res.status(400).send(err.message);
    }
});

userrouter.put("/user/:id",async(req,res)=>{
         try{
            const tokenAuth=req.header('Authorization');
            console.log('token recieved',tokenAuth);
            if(!tokenAuth){
              return res.status(200).json({
                    success:false,
                    message:"error!Token was not provided"
                });
                
            }
            const token=tokenAuth.split(' ')[1];
            console.log("here is the token",token);
            try{
                const decoded=jwt.verify(token,'xyz');
                console.log("decoded token",decoded);
            }catch(error){
                res.status(401).json({error:'invalid token'});
                console.log('invalid token');
                return;
                
            };       
        const _id=req.params.id;
        const showuser=await users.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(showuser);
    }
        catch(err){
        res.status(400).send(err);
    }
});

userrouter.delete("/deleteuser/:id",async(req,res)=>{
    try{
        const tokenAuth=req.header('Authorization');
            console.log('token recieved',tokenAuth);
            if(!tokenAuth){
              return res.status(200).json({
                    success:false,
                    message:"error!Token was not provided"
                });
                
            }
            const token=tokenAuth.split(' ')[1];
            console.log("here is the token",token);
            try{
                const decoded=jwt.verify(token,'xyz');
                console.log("decoded token",decoded);
            }catch(error){
                res.status(401).json({error:'invalid token'});
                console.log('invlaid token');
                return;
            };
        const showuser = await users.findByIdAndDelete(req.params.id);
        res.send(showuser);
    }catch(err){
        res.status(400).send(err);
    }
});





module.exports=userrouter;