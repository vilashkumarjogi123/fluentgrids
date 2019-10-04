import {  HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from 'login/login.component';
import { SignupComponent } from 'signUp/signup.component';
import { AppRoutingModule } from './app.router';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from 'signUp/home/home.component';


var route = [
     
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {

 }
