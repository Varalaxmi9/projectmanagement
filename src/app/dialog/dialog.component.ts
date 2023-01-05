import { Component, OnInit } from '@angular/core';
import { MatDialogRef  } from '@angular/material/dialog';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Users} from '../modal/users.model';
import { ShowPicComponent } from '../show-pic/show-pic.component';


// interface UsersData{
//   firstName : string;
//   lastName : string;
//   email : string;
//   userName : string;
//   password: string;
//   confirmpassword : string;
// }

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  userForm : FormGroup;
  userData : Partial<Users>[] = [];
 
 

  constructor(public dialogRef : MatDialogRef<DialogComponent>, private fb: FormBuilder) {
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
  addUser(user : any){
    console.log(user.value);
    // this.showpic.addEmployee(user);
    this.userData.push(this.userForm.value);
    this.closeModal();
    console.log(this.dialogRef.id);
  }

  resetForm(){
    this.userForm.reset();
  }

  closeModal(){
    this.closeDialogModal();
  }

  closeDialogModal(){
    this.dialogRef.close();
  }

}
