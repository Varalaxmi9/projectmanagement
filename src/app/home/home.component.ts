import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  previousUrl: any;
  currentUrl: any;

  constructor(private router: Router) {}
  
  ngOnInit(){
 
  }
}
