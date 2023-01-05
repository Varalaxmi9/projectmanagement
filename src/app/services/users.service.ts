import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import {User} from '../modal/user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  userUrl: string = "https://jsonplaceholder.typicode.com/users";
  constructor(private http : HttpClient) { }

  listUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
  }
}
