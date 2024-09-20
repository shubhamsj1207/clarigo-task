const express=require('express');
require("./databaseconnection/db")
const app=express();
const port=5000;
const router=require("./router/authentication");
const userrouter = require('./router/users');
const multer=require('multer');
const axios  = require('axios');
const axioususer=require('./model/axiousmod');


app.use(express.json());
app.use(router);
app.use(userrouter);

/*app.get('/fakeuser', async(req,res)=>{

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
});*/

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});

