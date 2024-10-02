const express = require('express');
require("./connection/db")
const app = express();
const port = 5000;
const router = require("./router/auth");
const userrouter = require('./router/user');
const emprouter = require('./router/emp');
const employee = require('./router/emp_salary');

app.use(express.json());
app.use(router);
app.use(userrouter);
app.use(emprouter);
app.use(employee)


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});


