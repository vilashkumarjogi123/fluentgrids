import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home-component',
    templateUrl: 'home.component.html',
    styleUrls:['home.component.css']
})

export class HomeComponent 
{
    allContactDetails;

    constructor(private router: Router){
        var isLoggedin = sessionStorage.getItem('isLoggedIn');
        if(isLoggedin == 'false'){
            this.router.navigate(['login']);
        }
        var tempContactDetails = sessionStorage.getItem('allContactDetails');
        if(tempContactDetails){
            this.allContactDetails = JSON.parse(tempContactDetails);
        } else {
            this.allContactDetails = [];
        }
    }

    saveAllContactDetails(allContactDetails){
        sessionStorage.setItem('allContactDetails',JSON.stringify(allContactDetails));
    }

    Logout(){
        sessionStorage.setItem('isLoggedIn','false');
        this.router.navigate(['login']);
    }

    createGroup(){
        var groupName = prompt("Enter Group Name");
        if(this.getGroupNamesList().indexOf(groupName)!=-1){
            alert("Group Already Exists");
            return;
        }
        console.log(groupName);
        if(groupName){
            this.allContactDetails.push({
                "groupName": groupName,
                "contactsLinked": [],
                "isActive": true
            });
            console.log(this.allContactDetails);
            this.saveAllContactDetails(this.allContactDetails);
        }
    }

    getPhoneNumber(){
        var PhoneNumber = prompt("Enter Phone Number");
        if(PhoneNumber){
            return PhoneNumber
        } else {
            return this.getPhoneNumber();
        }
    }
    makeActive(){
        console.log(this.allContactDetails);
        this.saveAllContactDetails(this.allContactDetails);
    }
    getGroupNamesList(){
        let groupNames = [];
        this.allContactDetails.map((groupDetails)=>{
            groupNames.push(groupDetails.groupName);
        });
        return groupNames;
    }

    getGroupName(msg){
        var GroupName = prompt(msg);
        var groupNamesList = this.getGroupNamesList();
        if(GroupName && groupNamesList.indexOf(GroupName)!=-1){
            return {"groupName": GroupName, index: groupNamesList.indexOf(GroupName)}
        } else {
            return this.getGroupName("Enter valid group name");
        }
    }

    createContact(){   
       if(!this.getGroupNamesList().length){
           alert("Please add group first");
           return;
       }
        var FirstName = prompt("Enter First Name");
        var LastName = prompt("Enter Last Name");
        var Email = prompt("Enter Email");
        var PhoneNumber = this.getPhoneNumber();
        var GroupNameDetails = this.getGroupName("Enter Group Name");
        // var existingGroupDetails = this.allContactDetails[GroupNameDetails.index];
        var contactDetails = {
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            PhoneNumber: PhoneNumber,
            isActive: true
        };
        this.allContactDetails[GroupNameDetails.index].contactsLinked.push(contactDetails);
        console.log(this.allContactDetails);
        this.saveAllContactDetails(this.allContactDetails);


    }
    
}