const express=require('express');
const mongoose=require('mongoose');
const AxiousSchema= new mongoose.Schema({
    name_employee:{
        type:String,
        reuired:true,
        trim:true            
    },
    employee_1salary:{
        type:Number,
        reuired:true,
        trim:true   
    },
    employee_1age:{
        type:Number,
        reuired:true,
        trim:true
    },
    profile_1image:{
        type:String,
    },    
});

const axioususer=new mongoose.model("fakeEmployee", AxiousSchema);
module.exports=axioususer;