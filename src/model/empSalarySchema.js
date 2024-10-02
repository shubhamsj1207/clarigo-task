const mongoose = require('mongoose');

const EmpSchemaSalary = new mongoose.Schema({
    userid: {
        type: Number,
        required: true,
        trime: true
    },
    amount: {
        type: Number,
        required: true,
        trime: true
    },

});

const empsalary = new mongoose.model("employee_salary", EmpSchemaSalary);
module.exports = empsalary;