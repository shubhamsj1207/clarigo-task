const mongoose = require ('mongoose');
const UserSchema = new mongoose.Schema({
    username:{
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
        type:String,
        required:true,
        trim:true
    },    
});

const user = new mongoose.model("admin", UserSchema);
module.exports = user;