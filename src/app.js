const express=require('express');
require("./databaseconnection/db")
const app=express();
const port=8000;
const router=require("./router/authentication");
const userrouter = require('./router/users');
const multer=require('multer');
const http = require("http");

app.use(express.json());
app.use(router);
app.use(userrouter);



app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});

