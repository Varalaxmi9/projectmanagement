import { Component, OnInit } from '@angular/core';
import { NgForm , FormBuilder} from '@angular/forms';
import { PostuserService } from '../services/postuser.service';

@Component({
  selector: 'app-buttontoggle',
  templateUrl: './buttontoggle.component.html',
  styleUrls: ['./buttontoggle.component.css']
})
export class ButtontoggleComponent implements OnInit {
  users : any[] = [];
  headers : any[] = [];
  submitted = false;
  
  constructor(private postService: PostuserService, private fb :FormBuilder) { }


  ngOnInit(): void {
    // this.postService.postUsers().subscribe((res: any) => {
    //   this.users = res;
    //   console.warn(res);
    // })
  }

  submitForm(data : NgForm){
    this.submitted=true;
    console.log(data.value);
    console.log(data.value.name);
    this.headers = Object.keys(data.value);
    this.users = Object.values(data.value);
    // this.users = data.value;
    // this.users = Object.entries(data.value);
    // console.log(this.users);
    console.log(this.users);
    data.reset();
  }

  editUser(person: any, indexValue : any){
    console.log("hi");
  }


}
