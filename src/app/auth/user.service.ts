import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject, Subscription} from 'rxjs';
import { Userss } from '../modal/userss.model';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private previousUrl: string = '';
  private currentUrl: string = '';

  constructor(public router : Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      };
    });
  }

  public getPreviousUrl(){
    return this.previousUrl;
  }    
}




