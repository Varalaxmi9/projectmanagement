import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  buttonVisible = true;
  registerBtn = true;

  constructor(public matdialog : MatDialog,  private route : Router) { 
    
  }

  ngOnInit(): void {
    console.log(this.route.url);
    if((this.route.url !== '/') && (this.route.url !== '/dashboard')){
      this.buttonVisible = false;
    }
  }

  openModal(){
    this.registerBtn = false;
    const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.id = "app-dialog";
        dialogConfig.height = "568px";
        dialogConfig.width = "600px";
        // dialogConfig.data = "this.registerBtn";
        // https://material.angular.io/components/dialog/overview
        const modalDialog = this.matdialog.open(DialogComponent, dialogConfig);
  } 
}
