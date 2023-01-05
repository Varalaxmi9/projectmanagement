import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import {User} from '../modal/user.model';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : any[] = [];

  constructor(private userService : UsersService) { }

  headers : any = [
    {field : 'id', header: 'Id', searchword : 'hi'},
    {field : 'name', header: 'Name', searchword : ''},
    {field : 'username', header: 'Username', searchword : ''},
    {field : 'email', header: 'Email', searchword : ''},
    {field : 'address', header: 'Address', searchword : ''},
    {field : 'phone', header: 'Mobile No', searchword : ''},
    {field : 'website', header: 'Webiste', searchword : ''},
    {field : 'company', header: 'Company', searchword : ''},
    // {field : '', header: '', searchword : ''},
  ]

  ngOnInit(): void {
     this.userService.listUsers().subscribe((res: any) => {
      this.users = res;
      console.warn(res);
    })
  }



}
