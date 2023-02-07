import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {
  isAdmin = false;
  isEmployee = false;
  user : any;
  name : string = "";
  loggedIn : string = "";
  firstLetter : any;
  userSub: Subscription = new Subscription;
  isAuthenticated = false;
  message = "";

  constructor(private activatedroute: ActivatedRoute, private authservice: AuthService, 
    private userService: UserService, private route: Router) { 
     
  }

  ngOnInit() {
    console.log(this.route.url);
    if(this.route.url.includes('full')){
      this.activatedroute.queryParams.subscribe(data => {
        console.log(data);
        this.user = data;
      })
      if(this.user.id === "admin@gmail.com"){
        this.isAdmin = true;
        this.isEmployee = false;
        console.log(this.isAdmin);
        console.log(this.isEmployee);
      }
    }
    else if(this.route.url.includes('short')){
      this.isEmployee = true;
        this.activatedroute.queryParams.subscribe(data => {
        console.log(data);
        this.user = data;
      })   
    }
    console.log(this.user);
    this.name = this.user.id;
    const index = this.name.indexOf('@');
    const name2 = this.name.substring(1,index);
    this.firstLetter = this.name.charAt(0);
    this.firstLetter = this.firstLetter.toUpperCase();
    console.log(name2);
    console.log(this.firstLetter);
    this.loggedIn = this.loggedIn.concat(this.firstLetter, name2);
    console.log(this.loggedIn); 
  
    // console.log(this.authenticate);
  }
  
  ngOnDestroy(): void {
    // this.userSub.unsubscribe();
  }
}
