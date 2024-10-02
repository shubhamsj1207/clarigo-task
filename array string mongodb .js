// array push method is used to push element in array;
/*const array=[1,2,3,4];
array.push(5);
console.log(array);*/

//sort method arrange alpha.

/*const arr=['shubham','amar','sonam','pradeep','mamta']
arr.sort();
console.log(arr);*/

//reverse method reverse the array;

/*const arr=['shubham','amar','sonam','pradeep','mamta']
arr.reverse();
console.log(arr);*/

//to sorted 
/*
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(months);
console.log(sorted);
*/

//to reversed
/*
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toReversed();
console.log(months);
console.log(sorted);
*/

//indexof return the indexing of array value;
/*
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Orange");
console.log(position);
*/

//lastindex of;
/*
const fruits = ["Apple", "Orange", "Apple", "Mango","kiwi","sattu","dragonfruit","Mango"];
let position = fruits.lastIndexOf("Mango");
console.log(position);
*/

//include method
/*
const arr=['shubham','amar','sonam','pradeep','mamta']
let include=arr.includes('Mamta');
console.log(include);
*/

//find()
/*
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value) {
  return value > 10;
};
console.log(first);
*/

//findIndexof
/*
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 25;
};
console.log(first);
*/

//last index
/*const temp = [27, 28, 60, 40, 42, 35, 30];
let high = temp.findLast(x => x > 50);
console.log(high);
*/

//forEach()
/*
const temp = [27, 28, 60, 40, 42, 35, 30];
temp.forEach((value)=>{
    console.log(value*value+2)
    });
console.log(temp);
*/
//map() returns an array

/*
let num=[10,2,3,4,5]
let map=num.map((value)=>{
    console.log(value);
    return value*2
})
console.log(map)
console.log(num);
*/

//filter creates a new array performing operations on each element of an array
/*
let num=[12,13,14,15,16,17];
let filter=num.filter((value)=>{
    return value>15;
});
console.log(filter);
*/

//reduce()method;
/*
let a=[10,20,30,40,50,60,70];
let c=a.reduce((h1,h2)=>{
    return h1+h2;
});
console.log(a);
console.log(c);
*/

//every()method; returns true or false
/*
let num=[12,13,14,15,16,17];
let every=num.every((value)=>{
    return value>1;
});
console.log(every);
*/

//some()method
/* 
let num=[212,123,214,125,163,122,3,10];
let some=num.some((value)=>{
    return value<10;
});
console.log(some)
*/

//from method
/*
let string='hyy shubham here'
let from=Array.from(string);
console.log(from);
*/

//with()method;
/*
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths);
console.log(months);
*/

//spread method()
/*
let num=[212,123,214,125,163,122,3,10];
let num1=[12,13,14,15,16,17];
let a=[10,20,30,40,50,60,70];
let num2=[12,13,14,15,16,17];
const spread=[...num,...num1,...a,...num2]
console.log(spread);
*/

//string methods;
//string length();
/*
let str='hyy shubham here';
let newstr=str.length;
console.log(newstr)
*/

//charat returns the char. which indexing we pass
/*
let str='hyy shubham'
let news=str.charAt(2);
console.log(news);
*/

//charCodeAt returns the binary value of string
/*
let text='hello'
let newstr=text.charCodeAt(2);
console.log(newstr);
*/

//at method return the char at that we passing indexing
/*
let text='hello'
let ntext=text.at(3);
console.log(ntext);
*/

//slice method slice the string from staring point and end point that you given
/*
let str="amar,shubham,jain"
let nstr=str.slice(5,12);
console.log(nstr);
*/

//to Uppercase method to use change the upper case strings
/*
let string = "Hello World!";
let string2 = string.toUpperCase();
console.log(string2)*/

//to lower case method is used to change string in lower case;
/*
let string = "Hello World!";
let string2 = string.toLowerCase();
console.log(string2)*/

//concat method is used to combine both strings;
/*
let string1 = "Hello";
let string2 = "World";
let string3 = string1.concat(" ",string2);
console.log(string3);
*/

//trim() method remove white spaces in strings;
/*
let str1 = "      hyy i am      ";
let str2 = str1.trim();
console.log(str2);
*/

//trim start()metod remove spaces from start 
/*
let str1 = "hyy i am      ";
let str2 = str1.trimStart();
console.log(str2);
*/

//trim end()method removes spaces from end 
/*
let str1="hyy i am       ";
let str2=str1.trimEnd();
console.log(str2);*/

//pad start()method 
/*
let str = "7";
let padded = str.padStart(6,"0");
console.log(padded);
*/

//pad end method
/*
let str = "7";
let padded = str.padEnd(6,"0");
console.log(padded);
*/

//repeat method
/* 
let text = "Hello world india! ";
let result = text.repeat(3);
console.log(result);
*/

//replace method
/*
let text = "hyy my name is shubham";
let newText = text.replace("name", "Name");
console.log(newText);
*/

//()index Of() retuen indexing of string;
/*
let str = "where are you 'locate' ";
let nstr = str.indexOf("are");
console.log(nstr);
*/

//lastindexof return last occurnace of string;
/*
let str = "Please locate where 'locate' occurs!";
let nstr = str.lastIndexOf("locate");
console.log(nstr);
*/

//search method
/*
let text = "Please locate where 'locate' occurs!";
let ntext=text.search("locate");
console.log(ntext);
*/

//match method 

/*
let text = "The rain in SPAIN stays mainly in the plain";
let ntext=text.match("ly");
console.log(ntext);
*/

//includes method return true or false

/*
let text = "Hello world, welcome to the universe.";
let inclu=text.includes("shubham");
console.log(inclu)
*/

//startsWith is also return true or false if string is being with that word;

/*
let text = "hello world, welcome to the universe.";
let ntext=text.startsWith("hello");
console.log(ntext);
*/

//endwith is also return true or false if string will end that specific string;

/*
let text = "Shubham jain";
let ntext=text.endsWith("jain");
console.log(ntext);
*/





//mongodb queries:----------------------------------------------------->


//find() query

/*
userrouter.get("/showdatas",async(req,res)=>{
    try{
        const tokenAuth = req.header('Authorization');
       // const token = req.headers.authorization.split(' ')[1];
        console.log('token received', tokenAuth);
        if (!tokenAuth) {
            return res.status(200).json({
                        success: false,
                        message: "Error!Token was not provided."
                    }); 
                           
        }
        const token = tokenAuth.split(' ')[1];
        console.log('here is the token', token);
        try {
        const decoded = jwt.verify(token,'xyz');
        console.log('decode token', decoded);
    } catch (error) {
         res.status(401).json({ error: 'Invalid token' });
        console.log('invalid token');
         return;
        }
        const showuser= await users.find({});
        res.send(showuser);
    }catch(err){
         res.status(400).send(err.message);
    }

});
*/

//findById();
/*
userrouter.get("/showdatas/:id",async(req,res)=>{
    try{
        const tokenAuth = req.header('Authorization');
       // const token = req.headers.authorization.split(' ')[1];
        console.log('token received', tokenAuth);
        if (!tokenAuth) {
            return res.status(200).json({
                        success: false,
                        message: "Error!Token was not provided."
                    }); 
                           
        }
        const token = tokenAuth.split(' ')[1];
        console.log('here is the token', token);
        try {
        const decoded = jwt.verify(token,'xyz');
        console.log('decode token', decoded);
    } catch (error) {
         res.status(401).json({ error: 'Invalid token' });
        console.log('invalid token');
         return;
        }
        const _id=req.params.id;
        const showuser= await users.findById(_id);
        res.send(showuser);
    }catch(err){
         res.status(400).send(err.message);
    }

});
*/

//findByIdAndDelete
/*
userrouter.delete("/userdel/:id",async(req,res)=>{
    try{
        const tokenAuth = req.header('Authorization');
       // const token = req.headers.authorization.split(' ')[1];
        console.log('token received', tokenAuth);
        if (!tokenAuth) {
            return res.status(200).json({
                        success: false,
                        message: "Error!Token was not provided."
                    }); 
                           
        }
        const token = tokenAuth.split(' ')[1];
        console.log('here is the token', token);
        try {
        const decoded = jwt.verify(token,'xyz');
        console.log('decode token', decoded);
    } catch (error) {
         res.status(401).json({ error: 'Invalid token' });
        console.log('invalid token');
         return;
        }
        const _id=req.params.id;
        const showuser= await users.findByIdAndDelete(_id);
        res.send(showuser);
    }catch(err){
         res.status(400).send(err.message);
    }

});
*/

//findByIdAndRemove()=> not working bhaiya se puchna:
/*
userrouter.delete("/remove/:id",async(req,res)=>{
    try{
        const tokenAuth = req.header('Authorization');
       // const token = req.headers.authorization.split(' ')[1];
        console.log('token received', tokenAuth);
        if (!tokenAuth) {
            return res.status(200).json({
                        success: false,
                        message: "Error!Token was not provided."
                    }); 
                           
        }0
        const token = tokenAuth.split(' ')[1];
        console.log('here is the token', token);
        try {
        const decoded = jwt.verify(token,'xyz');
        console.log('decode token', decoded);
    } catch (error) {
         res.status(401).json({ error: 'Invalid token' });
        console.log('invalid token');
         return;
        }
        try{
        const _id=req.params.id;
        const showuser= await users.findByIdAndRemove(_id,function(err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Removed User:", docs);
            }
        });
    }catch(error){
        console.log("error happend :" + error);
    }        
    }catch(err){
         res.status(400).send(err.message);
    }

});
*/


//findByIdAndUpdate 
/*
userrouter.put("/users/:id",async(req,res)=>{
    try{
       const tokenAuth=req.header('Authorization');
       console.log('token recieved',tokenAuth);
       if(!tokenAuth){
         return res.status(200).json({
               success:false,
               message:"error!Token was not provided"
           });
           
       }
       const token=tokenAuth.split(' ')[1];
       console.log("here is the token",token);
       try{
           const decoded=jwt.verify(token,'xyz');
           console.log("decoded token",decoded);
       }catch(error){
           res.status(401).json({error:'invalid token'});
           console.log('invalid token');
           return;
           
       };       
   const _id=req.params.id;
   const showuser=await users.findByIdAndUpdate({id:'123'},req.body,{
       new:true
   });
   res.send(showuser);
}
   catch(err){
   res.status(400).send(err);
}
});
*/

//findOne()
/*
userrouter.get("/findone/",async(req,res)=>{
    try{
        const tokenAuth = req.header('Authorization');
       // const token = req.headers.authorization.split(' ')[1];
        console.log('token received', tokenAuth);
        if (!tokenAuth) {
            return res.status(200).json({
                        success: false,
                        message: "Error!Token was not provided."
                    }); 
                           
        }
        const token = tokenAuth.split(' ')[1];
        console.log('here is the token', token);
        try {
        const decoded = jwt.verify(token,'xyz');
        console.log('decode token', decoded);
    } catch (error) {
         res.status(401).json({ error: 'Invalid token' });
        console.log('invalid token');
         return;
        }
        const showuser= await users.findOne({'fullname':"golu"});
        res.send(showuser);
    }catch(err){
         res.status(400).send(err.message);
    }

});
*/


//findOneAndDelete()
/*
userrouter.delete("/findoneandelete",async(req,res)=>{
    try{
        const tokenAuth = req.header('Authorization');
       // const token = req.headers.authorization.split(' ')[1];
        console.log('token received', tokenAuth);
        if (!tokenAuth) {
            return res.status(200).json({
                        success: false,
                        message: "Error!Token was not provided."
                    }); 
                           
        }
        const token = tokenAuth.split(' ')[1];
        console.log('here is the token', token);
        try {
        const decoded = jwt.verify(token,'xyz');
        console.log('decode token', decoded);
    } catch (error) {
         res.status(401).json({ error: 'Invalid token' });
        console.log('invalid token');
         return;
        }
        const showuser= await users.findOneAndDelete({'fullname':"golu"});
        res.send(showuser);
    }catch(err){
         res.status(400).send(err.message);
    }

});
*/

//findOneandReplace()=>bhaiya se puchna;

/*
userrouter.get("/findoneandreplace",async(req,res)=>{
    try{
        const tokenAuth = req.header('Authorization');
       // const token = req.headers.authorization.split(' ')[1];
        console.log('token received', tokenAuth);
        if (!tokenAuth) {
            return res.status(200).json({
                        success: false,
                        message: "Error!Token was not provided."
                    }); 
                           
        }
        const token = tokenAuth.split(' ')[1];
        console.log('here is the token', token);
        try {
        const decoded = jwt.verify(token,'xyz');
        console.log('decode token', decoded);
    } catch (error) {
         res.status(401).json({ error: 'Invalid token' });
        console.log('invalid token');
         return;
        }
        const showuser= await users.findOneAndReplace({'fullname':fullname.length<1},{
            new:true});
        res.send(showuser);
    }catch(err){
         res.status(400).send(err.message);
    }
});
*/

//findOneandupdate();
/*userrouter.put("/findoneandupdate",async(req,res)=>{
    try{
        const tokenAuth=req.header('Authorization');
       console.log('token recieved',tokenAuth);
        if(!tokenAuth){
          return res.status(200).json({
                success:false,
                message:"error!Token was not provided"
            });
           
        }
        const token=tokenAuth.split(' ')[1];
        console.log("here is the token",token);
        try{
            const decoded=jwt.verify(token,'xyz');
            console.log("decoded token",decoded);
        }catch(error){
            res.status(401).json({error:'invalid token'});
            console.log('invalid token');
            return;
           
        };       
   const showuser=await users.findOneAndUpdate({fullname:"arjun"},{fullname:"arjunsingh"});
   console.log('shooooooo', showuser);
   res.send(showuser);
}
   catch(err){
   res.status(400).send(err);
}
});*/






