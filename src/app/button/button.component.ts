import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, OnDestroy{
  // @Input() hero : any;
  buttonVisible = false;
  registerBtn = true;
  backBtn = false;
  td: any;
  userSub : Subscription = new Subscription;
  currentRoute : any;
  data : any;
  previousUrl: string = '';
  
  constructor(public matdialog : MatDialog,  private route : Router, 
    private activatedroute  : ActivatedRoute, private authservice : AuthService, private userService : UserService) { 
    // this.activatedroute.queryParams.subscribe(data => {
    //   console.log(data);
    //   this.td = data.id;
    //   console.log(this.td);
    // })
  }

  ngOnInit(): void {

    console.log(this.route.url);
  
    this.currentRoute = this.route.url;
    console.log(this.currentRoute);
  

    if(this.route.url !== '/home' && this.route.url !== '/login'){
      this.registerBtn = false;
      this.buttonVisible = true;
    }
      if(this.route.url === '/users' || this.route.url === '/hrmgmnt' || this.route.url === '/employeedetails' || 
      this.route.url === '/attendance' || this.route.url === '/tasknew' || this.route.url === '/reports'){
      this.backBtn = true;
    }
   
    
  }


  routeknow(){
    let previous = this.userService.getPreviousUrl();
      
    if(previous){
        this.userService.router.navigateByUrl(previous);
    }
  
  }

  openModal(){
    this.registerBtn = true;
    const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.id = "app-dialog";
        dialogConfig.height = "568px";
        dialogConfig.width = "600px";
        // dialogConfig.data = "this.registerBtn";
        // https://material.angular.io/components/dialog/overview
        const modalDialog = this.matdialog.open(DialogComponent);
  } 

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}

