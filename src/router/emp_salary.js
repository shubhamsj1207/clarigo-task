const express = require('express');
const empsalary = require('../model/empSalarySchema');
const employee = new express.Router();

employee.post("/empsalary", async (req, res) => {
    try {
        const data = req.body;
        console.log('body is coming ', data);
        const addemp = new empsalary(data);
        const insertempsalary = await addemp.save();
        res.status(201).send("employee salary added");
    } catch (error) {
        console.log('error happend ', error)
    }
})

/*emp.get("/empsalary/show", async (req, res) => {
    try {
        const showemp = await empsalary.find({})
        res.status(201).send(showemp);
    } catch (error) {
        console.log('error happend ', error)
    }
})*/


/*employee.get("/empsalary/show", async (req, res) => {
    try {
        const showemp = await empsalary.aggregate([
            {
                $lookup: {
                    from: "emp",
                    localField: "userid",
                    foreignField: "id",
                    as: "salary"
                }
            }
        ])
        res.status(201).send(showemp);
    } catch (error) {
        console.log('error happend ', error)
    }
});
*/


module.exports = employee;
