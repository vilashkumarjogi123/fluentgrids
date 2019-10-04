var express = require("express");

var app = express();

var cors = require("cors");
var bodyparser = require("body-parser");


var employeeFile = require("./employee");

app.use(cors());

app.use(bodyparser.json());

app.use("/employee",employeeFile);

app.listen(8080);
