const express = require('express');
const app = express.Router();
const employeeController = require('../controllers/employeeController');

app.get("/", employeeController.getEmployee);

app.get("/:id", employeeController.getEmployeeID);

app.get("/tax/:sal", employeeController.getEmployeeSal);

app.get("/retire/:age", employeeController.getEmployeeAge);

module.exports = app;
