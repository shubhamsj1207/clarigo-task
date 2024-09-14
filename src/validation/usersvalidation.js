const  Joi= require('joi');
function validationuser(data){
    const schema = Joi.object().keys({ 
        firstname: Joi.string().min(3).max(30).required(),
        lastname: Joi.string().min(3).max(30).required(),
        email : Joi.string().email().required(),
        mobileno: Joi.string().length(10).required(), 
        password : Joi.string().required(),
        profile_image: Joi.string(),
        });
    const result = schema.validate(data);
    return result;
    };
 module.exports=validationuser;   ``