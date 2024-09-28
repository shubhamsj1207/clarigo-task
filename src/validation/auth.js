const Joi = require ('joi');

function validationauth (data) {
    const schema = Joi.object().keys({ 
        username: Joi.string().alphanum().min(3).max(30).required(),
        email : Joi.string().email().required(),
        mobileno: Joi.string().length(10).required(), 
        password : Joi.string().required(),
        });
    const result = schema.validate(data);
    return result;
    };

 module.exports = validationauth;   