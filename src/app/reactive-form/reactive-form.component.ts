import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  checkoutForm : FormGroup; // 

  constructor(private fb: FormBuilder) { 
    this.checkoutForm = fb.group({
      emailaddrs : new FormControl(),
      quantity : new FormControl(),
      terms : new FormControl(),
    })
  }

  ngOnInit(): void {
  }

}
