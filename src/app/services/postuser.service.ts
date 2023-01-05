import { Injectable } from '@angular/core';
import { HttpClient,  HttpResponse } from '@angular/common/http';
import {User} from '../modal/user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PostuserService {

  userUrl: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http : HttpClient) { }

  postUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
  }
}
