const mongoose = require('mongoose');
const UsersSchema = new mongoose.Schema({
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
    },
    user_salary:{
        type:Number,
        reuired:true,
        trim:true   
    },
    user_age:{
        type:Number,
        reuired:true,
        trim:true
    },
      
});

const users = new mongoose.model("users", UsersSchema);
module.exports= users;