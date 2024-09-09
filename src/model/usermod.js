const express=require('express');
const mongoose=require('mongoose');
const UsersSchema= new mongoose.Schema({
    firstname:{
        type:String,
        reuired:true,
        trim:true            
    },
    lastname:{
        type:String,
        reuired:true,
        trim:true            
    },
    email:{
        type:String,
        reuired:true,
        trim:true   
    },
    mobileno:{
        type:Number,
        reuired:true,
        trim:true
    },
    password:{
        type:Number,
        required:true,
        trim:true
    },
    profile_image:{
        type:String,
        required:true
    }
      
});

const users=new mongoose.model("users",UsersSchema);
module.exports=users;