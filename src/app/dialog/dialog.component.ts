import { Component, OnInit } from '@angular/core';
import { MatDialogRef  } from '@angular/material/dialog';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Users} from '../modal/users.model';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  userForm : FormGroup;
  // userData : Partial<Users>[] = [];
  loggedInUser : any;
  isLoading = false;
  error : string  = '';
 

  constructor(public dialogRef : MatDialogRef<DialogComponent>, private fb: FormBuilder, 
    private route: Router, private http: HttpClient, private authService : AuthService) {
    this.userForm = this.fb.group({
      name : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      // lastName : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      userName : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      password : ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9!@$#%&*^]{6,12}$')]],
      confirmpassword : ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9!@$#%&*^]{6,12}$')]],
    });
   }

  ngOnInit(): void {
    // let showpic = new ShowPicComponent();
    
  }

  checkPassword(pwd : any, confirmpwd : any){
    console.log(pwd);
    console.log(confirmpwd);
    // if(pwd.equals(confirmpwd))
  }
  addUser(userForm : any){
    // this.http.post<any>('http://localhost:3000/users',userForm.value).subscribe((res) => {
    //   this.loggedInUser = this.userForm.value.name;
    //   this.resetForm();
    //   this.closeModal();
    //   this.route.navigate(['login']);
    // })
    if(!userForm.valid){
      return;
    }else{
        this.authService.signup(userForm.value.email, userForm.value.password).subscribe(resData => {
          this.isLoading = false;
          console.log(resData);
          this.resetForm();
          this.closeModal();
          this.route.navigate(['login']);
        }, errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.isLoading = false;
          // switch(errorRes.error.error.message){
          //   case "EMAIL_EXISTS" :
          //     this.error = "Email is already exists";
          // }
         
        });
      }
  }


  resetForm(){
    this.userForm.reset();
    this.error = '';
  }

  closeModal(){
    this.closeDialogModal();
  }

  closeDialogModal(){
    this.dialogRef.close();
  }

}
