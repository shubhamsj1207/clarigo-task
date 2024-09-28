const users = require ('./userSchema');

async function postData (useradd){
       const adduser = new users (useradd);
       const insertusers= await adduser.save();
       return insertusers;

};

async function getData (){
    const showuser = await users.find({});
    return showuser;       
};

async function putData (_id, body){
    console.log(_id);
    const showuser = await users.findByIdAndUpdate(_id,body,{
        new:true
    });
  return showuser;
}

async function delData (_id, body){
    const showuser = await users.findByIdAndDelete(_id,body);
    return showuser;       
};


module.exports={ getData , putData , delData , postData };
