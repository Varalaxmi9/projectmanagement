import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm : FormGroup;

  constructor(private fb: FormBuilder) { 
    this.userForm = this.fb.group({
      username : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      password : ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9!@$#%&*^]{6,12}$')]],
    });
  }

  ngOnInit(): void {
  }

}
