import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Userss } from '../modal/userss.model';
import { Subject, Subscription, throwError } from 'rxjs';

interface AuthResponseData{
  idToken : string;
  email	: string;
  refreshToken : string;
  expiresIn :	string;	
  localId : string;
  registered? : boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new Subject<Userss>();

  constructor(private http: HttpClient) { }

  

  signup(email : string, password : string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBU65W7zTT33058k7Jw4JpVcVVeAt7wsyw',
    {
      email : email,
      password : password,
      returnSecureToken : true
    }
    ).pipe(catchError(this.handleError), 
      tap(resData => {
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    })
    );
  }

  signin(email : string, password : string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBU65W7zTT33058k7Jw4JpVcVVeAt7wsyw',
    {
      email : email,
      password : password,
      returnSecureToken : true
    }
    ).pipe(catchError(this.handleError), 
    tap(resData => {
    this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    })
    );
    console.log(this.user);
  }

  private handleError(errorRes : HttpErrorResponse){
    let errorMessage = "An unknown error occured";
    if(!errorRes.error || !errorRes.error.error){
      return throwError(errorMessage);
    } 
    switch(errorRes.error.error.message){
      case "EMAIL_EXISTS" :
        errorMessage = "An email is already exists";
        break;
      case "INVALID_PASSWORD" :
        errorMessage = "password is invalid";
        break;
    }
    return throwError(errorMessage);
  }

  private handleAuthentication(email : string, userId : string, token: string, expiresIn : number){
    const expirationDate = new Date(
      new Date().getTime() + expiresIn * 1000);
    const user = new Userss(
      email,
      userId,
      token,
      expirationDate
    );
    this.user.next(user);
  }
}
