import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

interface Task {
  taskName : string;
  taskDescription : string;
}

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {
  userForm : FormGroup;
  listData : any;
  movies : any[] = [
    'Kantara', 'Karthikeya-2', 'Bimbisaara', 'Loukyam', 'Mass', 'Kanchana'
  ];
  Todo : any[] = [];
  Doing :  any[] = [
    {
      'taskName'  :  'Template Driven Form',
      'taskDescription' : 'These forms are structured'
    },
    {
      'taskName'  :  'Reactive Form', 
      'taskDescription' : 'These forms are dynamically created'
    },
    {
      'taskName'  :    'Crud operations on both forms',
      'taskDescription' : 'Perform add edit update delete operations'
    },
    {
      'taskName'  :  'Input output viewchild',
      'taskDescription' : 'These are directives'
    },
    {
      'taskName'  :  'Tree Drag & Drop',
      'taskDescription' : 'drag and drop elements from one to another list'
    },
    {
      'taskName'  :  'Tree Drag & Drop',
      'taskDescription' : 'drag and drop elements from one to another list'
    }
  ];

  Testing : any[] = [];
  Done : any[] = [
    {
      'taskName'  :   'Drag & drop',
      'taskDescription' : 'move one item from list to another list'
    },
    {
      'taskName'  :  'Bullet points',
      'taskDescription' : 'points are displayed using checkboxes'
    }
  ];

  
  public addToList() : void{
    console.log(this.userForm.value);
    // this.Todo.push(formData.value.taskName);
    // this.Todo.splice(0, 0, formData.value);
    this.listData =  this.userForm.value;
    // this.listData.push(this.userForm.value);
    console.log(typeof(this.listData));
    this.Todo.push(this.listData);
    localStorage.setItem("this.Todo", JSON.stringify(this.Todo));
    this.userForm.reset();
  }


  drop(event: CdkDragDrop<string[]>){
    if(event.previousContainer !== event.container){
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.previousContainer.data);
      console.log(event.container.data);
      console.log(event.previousIndex);
      console.log(event.currentIndex);
    }
    else{
      moveItemInArray(this.movies, event.previousIndex, event.currentIndex)
      console.log(event.previousIndex);
      console.log(event.currentIndex);
    }

  }
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      taskName : [' ', Validators.required],
      taskDescription : [' ', Validators.required]
    })
   }

  ngOnInit(): void {
 
  }

}
