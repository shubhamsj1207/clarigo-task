const express = require('express');
const userrouter = new express.Router();
const upload = require('../middleware/upload');
const { postUser, getUser, putUser, delUser } = require('../controller/user');

userrouter.post("/adduser/", upload.single('userprofile_image'), postUser);

userrouter.get("/showdata", getUser);

userrouter.put("/user/:id", putUser);

userrouter.delete("/deleteuser/:id", delUser);

module.exports = userrouter;







// that post api in which no change the model name or frontend name and split the name;

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

//user post api which is not adding multer middleware:

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

// get axious api in which insertmany use and previousely loop is use;

/*
userrouter.get('/fakeuser', async(req,res)=>{
  try {
    //const res1 = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
    //console.log('res', res1);
    const response=[
    {name_employee:"shashank jain",
    employee_salary:20000,
    employee_age:21},
     {name_employee:"abhinav jain",
    employee_salary:12000,
    employee_age:22},
     {name_employee:"mukund jain",
    employee_salary:13000,
    employee_age:23},
     {name_employee:"shikar jain",
    employee_salary:14000,
    employee_age:24},
    {name_employee:"ankit jain",
    employee_salary:15000,
    employee_age:25},
    {name_employee:"rahul jain",
    employee_salary:16000,
    employee_age:26},
    {name_employee:"gaurav jain",
    employee_salary:17000,
    employee_age:27},
    {name_employee:"shashank jain",
    employee_salary:18000,
    employee_age:28}]
    const emp=[ ];
    //const resmsg=response.status;
   // console.log(resmsg);
  // console.log(response);
  // res.send(response);
 //  const insertemp= await axioususer.insertMany(response);
  // res.send('employee add successfully');
  for(i=0;i<response.length;i++){
       emp.push(response[i]);
  }
  console.log(emp);
  const insertemp= await axioususer.insertMany(emp);
   res.send('employee add successfully');
  } catch (err) {
    console.log(err);
  }
});
  // const employeedata=response.data;
  // console.log(employeedata);
  // const employefirstname=employeedata.employee_name;
   //console.log(employefirstname);


  // try{
     //let filteremployee =employeedata.filter((age)=>{
       // return age.employee_age<20;
     //})

    //  .map((name)=>{
    //     return name.employee_name;
    //  })

    // console.log(filteremployee);
    // console.log(employeedata);

    //for(i=0;i<employeedata.length;i++){
        //console.log(employeedata[i]);
      //  const add=new axioususer(employeedata[i]);
       //   const adding = await add.save();

       //  console.log("data succesfully addded to db " +resmsg);
       //  return res.send('data saved '+ resmsg);

   // }catch(err){
     //   console.log('error',err);
   // }
*/

// get api of axious normal;

/*userrouter.get('/fakeuser', async(req,res)=>{

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


//changes in feilds post api of user - user_age,user_salary;
// all crud api's which may have not function move to controller;

/*userrouter.post("/adduser/", upload.single('userprofile_image'), async(req, res) => {
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
           console.log(req.body.salary)
           console.log(req.body.age);
           const fname=req.body.name;
           const username=fname.split(' ')[0];
           console.log(username);
   const useradd={
     fullname:username,
     useremail:data.email,
     usermobileno:data.mobileno,
     userpassword:data.password,
     userprofile_image:req.file.originalname,
     user_salary:data.salary,
     user_age:data.age,
   }
   const adduser= new users(useradd);
   const insertusers= await adduser.save();
   res.status(201).send("user added succesfully and profile uploaded successfully");
 
}catch (error) {  
    console.log(error);
    return res.status(400).send(error);
}
});*/

/*userrouter.get("/showdata",async(req,res)=>{
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
        const showuser= await users.find({});
        res.send(showuser);
    }catch(err){
         res.status(400).send(err.message);
    }

});*/

/*userrouter.put("/user/:id",async(req,res)=>{
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
*/

/*userrouter.delete("/deleteuser/:id",async(req,res)=>{
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
});*/

