const express= require ('express');
require ("./connection/db")
const app = express();
const port = 5000;
const router = require ("./router/auth");
const userrouter = require('./router/user');

app.use(express.json());
app.use(router);
app.use(userrouter);


app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});

