const express=require('express');
const user=require("../model/adminmod");
const validationauth=require("../validation/authvalidation");
const Joi=require('joi')
const router=new express.Router();
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
 

router.post("/registration",async(req,res)=>{
    console.log("body coming" +req.body);
    const data=req.body;
    const result= validationauth(data);
    if(result.error){
        console.log('response from joi',result.error.details[0].message);
        const errormessage=result.error.details[0].message;
       return res.status(404).send(errormessage);
        
    }
    try{
        let { password, email } = req.body;
        const has_pass = await bcrypt.hash(password, 2);
        console.log(has_pass);
        const userdata = {
            username: req.body.username,
            email: req.body.email,
            mobileno: req.body.mobileno,
            password: has_pass,

        }
        
        const repeatemail=await user.find({"email":email});
        console.log("db response",repeatemail);
        if(repeatemail.length==0){
            const add=new user(userdata);
            const insert= await add.save();
        }else{
         
          return res.send("email is already existed " + email);   
        }
          const token = jwt.sign({email:userdata.email,username:userdata.username},"xyz",{expiresIn:'1h'});
          console.log('token', token);
          res.status(201).json({ message: 'sign success', token });

            }catch(e){
     return  res.status(501).send(`something is error in signup ${e}`)
    }
});

router.post("/login",async(req,res)=>{
    console.log("login request body is coming",req.body);
    const data =req.body;
    const schemalogin = Joi.object().keys({ 
        email : Joi.string().email().required(), 
        password : Joi.string().required(),
        });
    const result = schemalogin.validate(data);
    if(result.error){
        console.log('response from joi',result.error.details[0].message);
        const errormessage=result.error.details[0].message;
      return res.status(404).send(errormessage);       
    }
    try{
        const email=req.body.email;
        const password=req.body.password;
        // const has_pass = await bcrypt.hash(password, 2);
        // console.log('has pass', has_pass);
        const dbresponse=await user.findOne({"email":email});
        console.log("db response "+ dbresponse )
        if(dbresponse){
            const dbpass = dbresponse.password;
            console.log("user password" +password);
            console.log("db password" + dbpass);
            const compare = await bcrypt.compare(password, dbpass);
            console.log('compare check', compare);
            
            if(!compare) {
                return res.status(501).send('invalid password');                
           }
      }else{
        
        return res.status(501).send('invalid email')
        
      }
      console.log('here');
      const token = jwt.sign({email:dbresponse.email,username:dbresponse.username},"xyz",{expiresIn:'1h'});
      console.log('token', token);      
      res.status(201).json({ message: 'login successfully', token });
    }
    catch(err){
        res.status(501).send(` error in login ${err}`) 
    }
    });

module.exports=router;
