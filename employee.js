var express = require("express");

var router = express.Router();

var mysql = require("mysql");

var con = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"root",
    database:"employee"
})

con.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("success");
    }
})

router.post("/employeeDetails",function(req,resp){

	con.query("insert into employee values(?,?,?)",[req.body.name,req.body.email,req.body.password,req.body.confirmpassword],function(err,results){
		if(err){	
			console.log(err);
			resp.send({"msg":"data insertion failed"});
		}
		else{
			resp.send({"msg":"data insertion success"});
		}
	})

});

module.exports = router;