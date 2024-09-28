const user = require ('../model/authSchema');
const validationauth = require ('../validation/auth');
const bcrypt = require ('bcrypt');
const Joi = require ('joi');
const {authRegistraion, authLogin, generateTokenlogin, generateTokenregister} = require('../model/auth');


async function registerUser (req,res) {
    console.log( "body coming" + req.body);
    const data =req.body;
    const result = validationauth (data);
    if(result.error){
        console.log( 'response from joi' , result.error.details[0].message);
        const errormessage = result.error.details[0].message;
       return res.status(404).send(errormessage);       
    }

    try{
        let { password, email } = req.body;
        const has_pass = await bcrypt.hash(password, 2);
        console.log(has_pass);
        const userdata = {
            username: req.body.username,
            email: req.body.email,
            mobileno: req.body.mobileno,
            password: has_pass,

        }                      
        const repeatemail = await user.find({"email":email});
        console.log( "db response" , repeatemail);
        if(repeatemail.length==0){
          const authUser = await authRegistraion(userdata);
          console.log('sign up body is coming', authUser);

        }else{
         
          return res.send("email is already existed " + email);   
        }
           const generatetoken = await generateTokenregister(userdata,res);
          // const registerToken = generatetoken;
         return generatetoken;

            }catch(error){

     return  res.status(501).send(`something is error in signup ${error}`)
    } 

};

async function loginUser (req,res){
    console.log("login request body is coming", req.body);
    const data = req.body;
    const schemalogin = Joi.object().keys({ 
        email : Joi.string().email().required(), 
        password : Joi.string().required(),
        });
    const result = schemalogin.validate(data);
    if(result.error){
        console.log('response from joi', result.error.details[0].message);
        const errormessage = result.error.details[0].message;
        return res.status(404).send(errormessage);       
    }
    try{
        const email = req.body.email;
        const password = req.body.password;
        const loginUser= await authLogin(email);
        const dbresponse=loginUser;
        console.log("db response "+ dbresponse )
        if(dbresponse){
            const dbpass = dbresponse.password;
            console.log("user password" + password);
            console.log("db password" + dbpass);
            const compare = await bcrypt.compare(password, dbpass);
            console.log('compare check', compare);
            
            if(!compare) {
                return res.status(501).send('invalid password');                
           }
      }else{       
        return res.status(501).send('invalid email');        
      }
       const tokengenrate = await generateTokenlogin(dbresponse,res);
       const tokenlogin = tokengenrate;
      return (tokenlogin);      
    }
    catch(err){
        res.status(501).send(` error in login ${err}`) 
    }

};


module.exports = { registerUser, loginUser};