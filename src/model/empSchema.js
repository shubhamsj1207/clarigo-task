const mongoose = require ('mongoose');

const EmpSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        trime:true
    },
    name:{
        type:String,
        required:true,
        trime:true
    },
    contact:{
        type:Number,
        required:true,
        trime:true
    },

});

const emp = new mongoose.model("employee", EmpSchema);
module.exports = emp;