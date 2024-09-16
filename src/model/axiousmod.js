const express=require('express');
const mongoose=require('mongoose');
const AxiousSchema= new mongoose.Schema({
    employee_name:{
        type:String,
        reuired:true,
        trim:true            
    },
    employee_salary:{
        type:Number,
        reuired:true,
        trim:true   
    },
    employee_age:{
        type:Number,
        reuired:true,
        trim:true
    },
    profile_image:{
        type:String,
    },    
});

const axioususer=new mongoose.model("axious", AxiousSchema);
module.exports=axioususer;