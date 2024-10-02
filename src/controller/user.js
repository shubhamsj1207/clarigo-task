const jwt = require('jsonwebtoken');
const validationuser = require("../validation/user");
const { getData, putData, delData, postData } = require('../model/user');
const users = require('../model/userSchema');


async function postUser(req, res) {
    try {
        const tokenauth = req.header('Authorization');
        console.log("token recieved", tokenauth);
        if (!tokenauth) {
            return res.status(200).json({
                success: false,
                message: "Error!Token was not provided."
            });
        }
        const token = tokenauth.split(' ')[1];
        console.log('token is coming');
        console.log("here is the token ", token);
        try {
            const decoded = jwt.verify(token, "xyz");
            console.log("token decoded", decoded);
        } catch (error) {
            res.status(401).send('invalid token');
            console.log('invalid token');
            return;
        }
        console.log(req.body);
        const data = req.body;
        const result = validationuser(data);
        if (result.error) {
            console.log('response from joi', result.error.details[0].message);
            const errormessage = result.error.details[0].message;
            res.status(404).send(errormessage);
            return;
        }
        console.log('file request ', req.file);
        if (!req.file) {
            res.status(413).send(`File not uploaded!, Please 
                                        attach jpeg file under 5 MB`);
            return;
        }
        console.log(req.body.name);
        console.log(req.body.email);
        console.log(req.body.mobileno);
        console.log(req.body.password);
        console.log(req.file.originalname);
        console.log(req.body.salary)
        console.log(req.body.age);
        const fname = req.body.name;
        const username = fname.split(' ')[0];
        console.log(username);
        const useradd = {
            fullname: username,
            useremail: data.email,
            usermobileno: data.mobileno,
            userpassword: data.password,
            userprofile_image: req.file.originalname,
            user_salary: data.salary,
            user_age: data.age,
        }

        const savedata = await postData(useradd);
        console.log(savedata);
        return res.status(201).send("user added succesfully and profile uploaded successfully");

    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
}

async function getUser (req, res) {
    try{
    const tokenAuth = req.header('Authorization');
        console.log('token received', tokenAuth);
        if (!tokenAuth) {
            return res.status(200).json({
                        success : false,
                        message : "Error!Token was not provided."
                    });                            
        }
        const token = tokenAuth.split(' ')[1];
        console.log('here is the token', token);
        try {
        const decoded = jwt.verify(token,'xyz');
        console.log(decoded);
        console.log('decode token', decoded);
    } catch (error) {
         res.status(401).json({ error: 'Invalid token' });
        console.log('invalid token');
         return;
        }
        const getuser = await getData();
        return res.status(200).send(getuser);       
}catch(err){
     res.status(400).send(err.message);
}
}

async function putUser(req, res) {
    try {
        const tokenAuth = req.header('Authorization');
        console.log('token recieved', tokenAuth);
        if (!tokenAuth) {
            return res.status(200).json({
                success: false,
                message: "error!Token was not provided"
            });

        }
        const token = tokenAuth.split(' ')[1];
        console.log("here is the token", token);
        try {
            const decoded = jwt.verify(token, 'xyz');
            console.log("decoded token", decoded);
        } catch (error) {
            res.status(401).json({ error: 'invalid token' });
            console.log('invalid token');
            return;

        }
        const _id = req.params.id;
        const body = req.body;
        const updateuser = await putData(_id, body);
        return res.status(200).send(updateuser);
    }
    catch (err) {
        res.status(400).send(err);
    }
}

async function delUser(req, res) {
    try {
        const tokenAuth = req.header('Authorization');
        console.log('token recieved', tokenAuth);
        if (!tokenAuth) {
            return res.status(200).json({
                success: false,
                message: "error!Token was not provided"
            });
        }
        const token = tokenAuth.split(' ')[1];
        console.log("here is the token", token);
        try {
            const decoded = jwt.verify(token, 'xyz');
            console.log("decoded token", decoded);
        } catch (error) {
            res.status(401).json({ error: 'invalid token' });
            console.log('invlaid token');
            return;
        };
        const _id = req.params.id;
        const body = req.body;
        const deleteuser = await delData(_id, body);
        res.status(201).send(deleteuser);
    } catch (err) {
        res.status(400).send(err);
    }
}




module.exports = { postUser, getUser, putUser, delUser };



/*async function getUser(req, res) {
    try {
        // const showuser= await users.find({user_age:{$eq:22}});
        //const showuser= await users.find({user_age:{$ne:22}});
        // const showuser= await users.find({user_age:{$gt:28}});
        //const showuser= await users.find({user_age:{$gte:30}});
        // const showuser= await users.find({user_age:{$lt:21}});
        //const showuser= await users.find({user_age:{$lt:21}});
        //const showuser= await users.find({user_age:{$in:[30,20,]}})
        // const showuser= await users.find({user_age:{$nin:[30,20,]}});
        // const showuser=await users.find({$or:[{user_age:{$lt:20}},{user_age:{$gt:30}}]});
        // const showuser=await users.find({$nor:[{user_age:{$lt:20}},{user_age:{$gt:30}}]});
        //const showuser=await users.find({$and:[{user_age:{$lt:25}},{user_salary:{$gt:10000}}]});
        //const showuser=await users.find({$and:[{user_age:{$lt:25}},{user_salary:{$gt:10000}}]});
        //const showuser=await users.find({$and:[{user_age:{$lt:25}},{user_salary:{$gt:10000}}]});
        //const showuser=await users.aggregate([{$match:{ user_age:20}}]);
        //const showuser=await users.aggregate([{$group:{ _id:"$user_age",names:{$push:"$fullname"}. }}]);
        //const showuser=await users.aggregate([{$group:{ _id:"$user_age",documnet:{$push:"$$ROOT"}}}]);
        const showuser = await users.aggregate([{ $group: { _id: "$user_age", documnet: { $push: "$$ROOT" } } }]);
        return res.send(showuser);
    } catch (err) {
        res.status(400).send(err.message);
    }
}*/

