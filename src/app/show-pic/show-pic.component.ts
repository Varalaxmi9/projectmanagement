import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Users} from '../modal/users.model';

// interface Users{
//   id : number;
//   name : string;
//   email : string;
//   address : string;
//   mobile : string;
//   profilepic : string;
//   edit: boolean;
// }

@Component({
  selector: 'app-show-pic',
  templateUrl: './show-pic.component.html',
  styleUrls: ['./show-pic.component.css']
})
export class ShowPicComponent implements OnInit {
  employeeForm : FormGroup;
  headers : any;
  Colheaders: any[] = [];
  data : Partial<Users>[] = [
    {
      id : 1,
      name : 'Varalaxmi',
      email : 'varam@gmail.com',
      address : 'Karimnagar',
      mobile : '9573640437',
      profilepic : '../../assets/varalaxmi.jpeg',
      edit : false,
    },
    {
      id : 2,
      name : 'Jyothi',
      email : 'jyothi@gmail.com',
      address : 'Karimnagar',
      mobile : '8790640437',
      profilepic : '../../assets/j1.jpg',
      edit : false,
    },
    {
      id : 3,
      name : 'Rithwik',
      email : 'sai@gmail.com',
      address : 'Karimnagar',
      mobile : '8790640864',
      profilepic : '../../assets/k3.jpg',
      edit : false,
    },
    {
      id : 4,
      name : 'Rithwik',
      email : 'sai@gmail.com',
      address : 'Karimnagar',
      mobile : '8790640864',
      profilepic : '../../assets/k3.jpg',
      edit : false,
    },
    {
      id : 5,
      name : 'Rithwik',
      email : 'sai@gmail.com',
      address : 'Karimnagar',
      mobile : '8790640864',
      profilepic : '../../assets/k3.jpg',
      edit : false,
    }, 
    {
      id : 6,
      name : 'Rithwik',
      email : 'sai@gmail.com',
      address : 'Karimnagar',
      mobile : '8790640864',
      profilepic : '../../assets/k3.jpg',
      edit : false,
    },
    {
      id : 7,
      name : 'Jyothi',
      email : 'jyothi@gmail.com',
      address : 'Karimnagar',
      mobile : '8790640437',
      profilepic : '../../assets/j1.jpg',
      edit : false,
    },
    {
      id : 8,
      name : 'Jyothi',
      email : 'jyothi@gmail.com',
      address : 'Karimnagar',
      mobile : '8790640437',
      profilepic : '../../assets/j1.jpg',
      edit : false,
    }
  ];

  constructor(private fb:FormBuilder) { 
    this.employeeForm = this.fb.group({
      id : ['', [Validators.required, Validators.minLength(1)]],
      name : ['', Validators.required],
      email : ['',Validators.required],
      address : ['',Validators.required],
      mobile : ['', Validators.required],
      profilepic : ['', Validators.required],
    })
  }

  ngOnInit(): void {
    console.log(this.data);
    for(let item of this.data){
      this.headers = Object.keys(item);
    }
    console.log(this.headers);
    for(let head of this.headers){
      if(head !== 'edit'){
        this.Colheaders.push(head);
      }
    }
    console.log(this.Colheaders);
    console.log(typeof(this.headers));
  }

  addEmployee(employee : any){
    console.log(this.employeeForm.value);
    console.log(this.employeeForm.value.profilepic);
    let value = this.employeeForm.value.profilepic;
    value = value.replace("C:\\fakepath\\", "../../assets/");
    value = value.replace();
    this.employeeForm.value.profilepic = value;
    this.data.push(employee.value);
  }

  resetEmployee(){
    
  }

  editEmployee(user : any, index : number){
    user.edit = true;
  }

  updateEmployee(user: any, index:number){
    user.edit = false;
  }

  cancel(user : any){
    user.edit = false;
  }

  deleteEmployee(user : any){
    const index = this.data.indexOf(user);
    this.data.splice(index, 1);
  }

  onFileSelect(event : any){
    const file  = event.target.files[0];
    console.log(file);
  }
}
