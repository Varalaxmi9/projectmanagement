import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  employeeForm : any;
  submitted = false;
  departments : any = [
    {id:"1", name:"dept 1"},
    {id:"2", name:"dept 2"},
    {id:"3", name:"dept 3"}
  ];
  genders : any = [
    'male', 'female', 'others'
  ];
  

  constructor(private fb: FormBuilder) {

   }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      // $key :  (null),
      firstName : ['', [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.maxLength(15), Validators.minLength(2)]],
      email :  ['', Validators.email],
      // mobile :  ('', [Validators.required, Validators.minLength(10), Validators.pattern("^([1-9]{1}[0-9]{9}$")]),
      mobile :  ['', [Validators.required, Validators.min(10),Validators.maxLength(10), Validators.pattern('^([7-8]{1})+([0-9]{9})$')]],
      city:  [''],
      gender :  [''],
      department :  [''],
      // hireDate :  [''],
      isPermanent :  [false]
    })
  }

  // convenience getter for easy access to form fields
  // get f() { 
  //   return this.employeeForm.controls; 
  // }

  onSubmit(){
    this.submitted = true;
    console.log(this.employeeForm.value);
  }

  onClear(){
    this.employeeForm.reset();
    this.initializeFormGroup();
  }

  initializeFormGroup(){
    this.employeeForm.setValue({
      // $key : null,
      firstName : '',
      email : '',
      mobile : '',
      city: '',
      gender : '',
      department : '',
      // hireDate : '',
      isPermanent : false
    });
  }

}
