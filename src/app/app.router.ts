import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from 'login/login.component';
import {SignupComponent} from 'signUp/signup.component';
import {RouterModule, Router} from '@angular/router';
import { HomeComponent } from 'signUp/home/home.component';


var route = [
     
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"home",component:HomeComponent},
    {path:'**', redirectTo:'login'}
]



@NgModule({
    imports: [RouterModule.forRoot(route)],
    
})
export class AppRoutingModule 
{


 }
