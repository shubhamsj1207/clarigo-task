const express=require('express');
const mongoose=require('mongoose');
const UsersSchema= new mongoose.Schema({
    fullname:{
        type:String,
        reuired:true,
        trim:true            
    },
    useremail:{
        type:String,
        reuired:true,
        trim:true   
    },
    usermobileno:{
        type:Number,
        reuired:true,
        trim:true
    },
    userpassword:{
        type:Number,
        required:true,
        trim:true
    },
    userprofile_image:{
        type:String,
        required:true
    }
      
});

/*const UsersSchema= new mongoose.Schema({
    name:{
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
      
});*/


const users=new mongoose.model("users",UsersSchema);
module.exports=users;