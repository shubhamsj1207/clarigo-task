const express = require('express');
const emp = require('../model/empSchema');
const emprouter = new express.Router();



emprouter.post("/employee", async (req, res) => {
    try {
        const data = req.body;
        console.log('body is coming', data);
        const empadd = new emp(data);
        const insert = await empadd.save();
        res.status(201).send("employee added successfully");
    }
    catch (error) {
        console.log('error happend', error);
        return res.status(400).send(error);
    }
});

emprouter.get("/empsalary/show", async (req, res) => {
    try {
        const show = []
        const showemp = await emp.aggregate([
            {
                $lookup: {
                    from: "employee_salaries",
                    localField: "id",
                    foreignField: "userid",
                    as: "salary"
                }
            }
        ])

        // let mapemp = showemp.map((value) => {
        //     const salarayarray = value.salary;
        //     let amount = salarayarray[0].amount;
        //     show.push({
        //         id: value.id,
        //         name: value.name,
        //         contact: value.contact,
        //         salary: amount
        //     })
        // });

        let mapemployee = showemp.map((value) => {
            const salarry = value.salary;
            let amount = salarry[0].amount;
            show.push({
                id: value.id,
                name: value.name,
                contact: value.contact,
                salary: amount,
            })
        });




        /* for (i = 0; i < showemp.length; i++) {
             let salaryarray = showemp[i].salary;
             let amount = salaryarray[0].amount;
             show.push({
                 id: showemp[i].id,
                 name: showemp[i].name,
                 contact: showemp[i].contact,
                 salary: amount
             })
         };*/
        // console.log(showemp);
        //  const salarayarray = showemp.salary;
        //const salaryAmount = salarayarray.amount;
        // console.log(salarayarray);
        res.status(201).send(show);
    } catch (error) {
        console.log('error happend ', error)
    }
});



/*emprouter.get("/employee/get", async (req, res) => {
    try {
        const showemp = await emp.find({});
        res.send(showemp);

    }
    catch (error) {
        console.log('error happend', error);
        return res.status(400).send(error);
    }
});*/




module.exports = emprouter;
