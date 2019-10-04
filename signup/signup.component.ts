import { HttpClient } from '@angular/common/http';
import { EmployeeDetails } from './employee';
import { Component, OnInit } from '@angular/core';
    
    @Component({
        selector: 'signup',
        templateUrl: 'signup.component.html'
    })
    
    export class SignupComponent{
        emp = new EmployeeDetails();
        constructor(private hc:HttpClient){
        }
        signup(){
            this.hc.post("http://localhost:8080/employee/employeedetails",this.emp).subscribe((data)=>{
                alert("insertion success");
            },(error)=>{
                alert("data insertion failed")
            })
        }
    
    }


