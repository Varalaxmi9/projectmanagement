import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { UserService } from '../auth/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  // userSub: Subscription = new Subscription;
  userForm : FormGroup;
  error : string = '';
  // isAuthenticated = false;
  // successfulLogin : any;
  fullMode : boolean = true;
  message = "";


  constructor(private fb: FormBuilder, private http: HttpClient, private route : Router, 
    private authService : AuthService, private routeActivated : ActivatedRoute, private userService : UserService) { 
    this.userForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9!@$#%&*^]{6,12}$')]],
    });
  }

  ngOnInit(): void {
    // this.userSub = this.authService.user.subscribe( user => {
    //   this.isAuthenticated = !user ? false : true;
    //   console.log(!user);
    //   console.log(!!user);
    //   console.log(user);
    //   console.log(this.isAuthenticated);
    // });
    this.fullMode = this.routeActivated.snapshot.data['fullView'];
    console.log(this.fullMode);
  }

  login(userForm : FormGroup){
    if(!userForm.valid){
      return;
    }else{
        this.authService.signin(userForm.value.email, userForm.value.password).subscribe(resData => {
          console.log(resData);
          this.userForm.reset();
          if(resData.email === 'admin@gmail.com'){
            // this.route.navigate(['/dashboard']);
            this.route.navigate(['/full'], {queryParams: {id: resData.email}});
          }
          else{
            this.route.navigate(['/short'], {queryParams: {id: resData.email}});
          }
          // this.userService.authenticatedUser.subscribe( user => {
          //   console.log(user);
          // })
          // this.route.navigate(['/dashboard'], {queryParams: {id: resData.email}});
        },errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.userForm.reset();
        // errorRes => {
        //   this.error = errorRes.error.error.message;
        //   this.userForm.reset();
        //   console.log(errorRes);
        });
      }
  }

  ngOnDestroy(): void {
    // this.userSub.unsubscribe();
  }

  // checkLogin(userForm : any){
  //   this.http.get<any>('http://localhost:3000/users').subscribe((res) => {
  //     const user = res.find((a:any) => {
  //       return a.userName === userForm.value.userName && a.password === userForm.value.password
  //     });
  //     if(user){
  //       alert('You have successfully login');
  //       userForm.reset();
  //       this.route.navigate(['dashboard']);
        
  //     }else{
  //       alert('User not found ');
  //     this.route.navigate(['login']);
  //     }

  //   },err => {
  //     alert(' not found ');
  //   })
  // }

}
