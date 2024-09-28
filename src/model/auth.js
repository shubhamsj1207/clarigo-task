const user = require ('./authSchema');
const jwt = require ('jsonwebtoken');

async function authRegistraion (userdata){
    const add = new user(userdata);
    const insert = await add.save();
    return insert;
}

async function authLogin (email){
    const dbresponse = await user.findOne({"email":email});
    return dbresponse;
};

async function generateTokenlogin (dbresponse,res){
    const token = jwt.sign({email:dbresponse.email,username:dbresponse.username},"xyz",{expiresIn:'1h'});
    console.log('token', token);      
   return res.status(201).json({ message: 'login successfully', token });
}

async function generateTokenregister (userdata,res){
    const token = jwt.sign({email:userdata.email,username:userdata.username},"xyz",{expiresIn:'1h'});
    console.log('token', token);      
   return res.status(201).json({ message: 'sign success', token });
}



module.exports={authRegistraion, authLogin, generateTokenlogin, generateTokenregister};