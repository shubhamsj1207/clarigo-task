const  Joi = require('joi');

function validationuser (data){
    const schema = Joi.object().keys({ 
        name : Joi.string().min(3).max(30).required(),
        email : Joi.string().email().required(),
        mobileno : Joi.string().length(10).required(), 
        password : Joi.string().required(),
        profile_image : Joi.string(),
        salary : Joi.string().min(4).max(7).required(),
        age : Joi.string().min(2).max(3).required(),
        });
    const result = schema.validate(data);
    return result;
    };
    
 module.exports = validationuser;   