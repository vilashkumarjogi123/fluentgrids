import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login-component',
    templateUrl: 'login.component.html'
})

export class LoginComponent 
{
    constructor( private router: Router){}
    email = '';
    password= '';
    
    onlogin() { 
        console.log(this.email, this.password);
        if(this.email === this.password){
            this.router.navigate(['home']);
            sessionStorage.setItem("isLoggedIn", 'true');
            
        }
    }
}