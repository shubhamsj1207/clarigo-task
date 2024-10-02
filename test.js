// const obj = {
//     id: '123',
//     name: 'shubham'
// }

// const newObj = { ...obj, ...{ surname: 'jain' } };
// const newobj1 = Object.assign(obj, { surname: 'jain' });
// delete newObj.surname;
// console.log(newObj);

// const obj1 = {
//     id: '123',
//     name: 'shubham'
// }

// const obj2 = {
//     city: 'indore',
//     country: 'inias'
// }

// const array = [{
//     id: '123',
//     name: 'shubham'
// },
// {
//     city: 'indore',
//     country: 'inias'
// },
// ]

// const array1 = [{
//     id: '124',
//     name: 'amar'
// },
// {
//     city: 'bhopal',
//     country: 'usa'
// },
// ]

// const newObj = [...array, ...array1]


// newObj.push({
//     id: '125',
//     name: 'sunny',
// });

// newObj.pop()



// console.log(newObj);


// let employees_data = [
//     {
//         employee_id: 1,
//         employee_name: "Aman",
//     },
//     {
//         employee_id: 2,
//         employee_name: "Bhargava",
//     },
//     {
//         employee_id: 3,
//         employee_name: "Chaitanya",
//     },
// ];

// const modifiedEmployees = employees_data.map(obj => {
//     if (obj.employee_id === 1) {
//         return { ...obj, employee_name: "shankar" };
//     }
//     if (obj.employee_id === 2) {
//         return { ...obj, employee_name: "ganesh" };
//     }
//     return obj;
// });




//console.log(modifiedEmployees);

// let employees_data = [
//     {
//         employee_id: 1,
//         employee_name: "Aman",
//     },
//     {
//         employee_id: 2,
//         employee_name: "Bhargava",
//     },
//     {
//         employee_id: 3,
//         employee_name: "Chaitanya",
//     },
// ];

// const modifiedEmployees = employees_data.map(obj => {
//     if (obj.employee_id === 2) {
//         return { ...obj, employee_name: "rahul" };
//     }
//     return obj;
// });

// console.log(modifiedEmployees);

// const users = [
//     { name: 'Neha', age: 32 },
//     { name: 'Ankit', age: 24 },
//     { name: 'Babita', age: 41 },
// ];


// const youngUsers = users.filter(user => user.age < 30);
// console.log("Make a filter and show the data if age is less than 30:")
// console.log(youngUsers);


// let employees_data = [
//     {
//         employee_id: 1,
//         employee_name: "Aman",
//     },
//     {
//         employee_id: 2,
//         employee_name: "Bhargava",
//     },
//     {
//         employee_id: 3,
//         employee_name: "Chaitanya",
//     },
// ];

// const modifiedEmployees = employees_data.map(obj => {
//     if (obj.employee_id === 1) {
//         return { ...obj, employee_name: "shankar" };
//     }
//     if (obj.employee_id === 2) {
//         return { ...obj, employee_name: "ganesh" };
//     }
//     return obj;
// });

// console.log(modifiedEmployees);
