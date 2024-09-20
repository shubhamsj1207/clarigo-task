const express=require('express');
const users=require("../model/usermod");
const validationuser=require("../validation/usersvalidation")
const Joi=require('joi');
const userrouter=new express.Router();
const jwt=require('jsonwebtoken');
const multer=require('multer');
const upload=require('../controller/upload');
const axioususer=require('../model/axiousmod');
const axios=require('axios');


userrouter.post("/adduser/", upload.single('userprofile_image'), async(req, res) => {
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
        console.log('token is coming');
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
                 res.status(404).send(errormessage);  
                 return;     
            }  
            console.log('file request ', req.file);
            if (!req.file) {
                res.status(413).send(`File not uploaded!, Please 
                                    attach jpeg file under 5 MB`);
                return;
            }
           
           console.log(req.body.name);
           console.log(req.body.email);
           console.log(req.body.mobileno);
           console.log(req.body.password);
           console.log(req.file.originalname);
           const fname=req.body.name;
           const username=fname.split(' ')[0];
           console.log(username);
   const useradd={
     fullname:username,
     useremail:data.email,
     usermobileno:data.mobileno,
     userpassword:data.password,
     userprofile_image:req.file.originalname
   }
   const adduser= new users(useradd);
   const insertusers= await adduser.save();
   res.status(201).send("user added succesfully and profile uploaded successfully");
 
}catch (error) {  
    console.log(error);
    return res.status(400).send(error);
}
});


/*userrouter.post("/adduser/", upload.single('profile_image'), async(req, res) => {
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
        console.log('token is coming');
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
                 res.status(404).send(errormessage);  
                 return;     
            }  
            console.log('file request ', req.file);
            if (!req.file) {
                res.status(413).send(`File not uploaded!, Please 
                                    attach jpeg file under 5 MB`);
                return;
            }
           
           console.log(req.body.firstname);
           console.log(req.body.lastname);
           console.log(req.body.email);
           console.log(req.body.mobileno);
           console.log(req.body.password);
           console.log(req.file.originalname);


   const useradd={
     firstname:req.body.firstname,
     lastname:req.body.lastname,
     email:req.body.email,
     mobileno:req.body.mobileno,
     password:req.body.password,
    profile_image:req.file.originalname
   }
   const adduser= new users(useradd);
   const insertusers= await adduser.save();
   res.status(201).send("user added succesfully and profile uploaded successfully");
 
}catch (error) {  
    return res.status(400).send(error);
}
});*/



/*userrouter.post("/addusers", async(req,res)=>{
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
 */


/*userrouter.get('/fakeuser', async(req,res)=>{
  try {
    const res1 = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
    //console.log('res', res1);
    const response=res1.data;
    const resmsg=response.status;
    console.log(resmsg);
  } catch (err) {
    console.log(err);
  }
   /*const employeedata=response.data;
   console.log(employeedata);
  // const employefirstname=employeedata.employee_name;
   //console.log(employefirstname);


   try{
     //let filteremployee =employeedata.filter((age)=>{
       // return age.employee_age<20;
     //})
     
    //  .map((name)=>{
    //     return name.employee_name;
    //  })
     
    // console.log(filteremployee);
    // console.log(employeedata);

    for(i=0;i<employeedata.length;i++){
        //console.log(employeedata[i]);
        const add=new axioususer(employeedata[i]);
          const adding = await add.save();
    }
         console.log("data succesfully addded to db " +resmsg);
         return res.send('data saved '+ resmsg);
         
    }catch(err){
        console.log('error',err);
    
}*/


/*
userrouter.get('/fakeuser', async(req,res)=>{

    const res1 = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
  //  console.log('res', res1);
    const response=res1.data;
   // console.log(response.data);
    const employeedata=response.data;
    console.log(employeedata);
   try{
    for(i=0;i<employeedata.length;i++){
        //console.log(employeedata[i]);
        const add=new axioususer(employeedata[i]);
          const adding = await add.save();
    }
         return res.send('data saved');
    }catch(err){
        console.log('error',err);
    }
});
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
        const decoded = jwt.verify(token,'xyz');
        console.log('decode token', decoded);
    } catch (error) {
         res.status(401).json({ error: 'Invalid token' });
        console.log('invalid token');
         return;
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