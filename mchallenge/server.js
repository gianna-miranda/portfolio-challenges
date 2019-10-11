const express = require('express');
const employee = require("./employee.json");
console.log(employee)
//setting up express module
// const express = require("../mchallenge/employee.JSON");
//linking our express variable to our .JSON folder so we can get our employee information 
const app = express();
const port = process.env.PORT || 3000;
// const port = 3000;



app.get("/employee", (req,res) =>{
  //pulling the info from employees
    res.send(employees);
    console.log(req); 
});

app.get("/employee/:ID", (req, res) => {
    const id = req.params.id
    const Employee = employees.filter(
      employee => employee.employeeID === id
    );
    //making sure we only get the employee ID
    if(Employee.length > 0) {
      return res.send(Employee);
    }
    //created an if statment to return the employees info
    res.status(404).send('Employee Not Found');
  });

  /////////////////////////////////////////////////////////////////////////Hard////////////////////////////////////////////////////////////
  
  app.put("/employee/:ID", (req, res) => {
  })
  
  app.put("/employee/:ID", (req, res) => {
      const Employee = employees.find(function (data) {
          return parseInt(req.params.id) === data.id
      }
      );
      Employee.name = req.body.name;
      Employee.salary = req.body.salary;
      Employee.department = req.body.department;
      if (!Employee) {
          res.status(404).send('Employee Not Found');
      }
      res.send(Employee)
   }); 
  //  checks if the employee already exists, if not it will make a new one
   app.post("/employee", (req, res) => {
      console.log(req.body)
      let employee = {
          id: employees.length + 1,
          name: req.body.name,
          salary: req.body.salary,
          department: req.body.department
      }
      if (!Employee) {
          res.status(404).send('Employee Not Found');
      }
      employees.push(employee)
      res.send(employees)
      console.log(employees)
   })
  
  //  filter the matching ID and delete it 
   app.delete("/employee/:ID", (req, res) => {
      const Employee = employees.find(function (data) {
          return parseInt(req.params.id) === data.id
      }
      );
      const index = employees.indexOf(Employee);
      employees.splice(index, 1)
      if (!Employee) {
          res.status(404).send('Employee Not Found');
      }
      res.send(Employee)
   });
  //  const port = process.env.PORT || 3000; //process.env.PORT || 
   app.listen(port, () => {
   })
   app.listen(4000);

