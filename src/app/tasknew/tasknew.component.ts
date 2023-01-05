import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';

interface projects {
  project_id : string,
  project_name : string,
  project_start_date : string,
  project_end_date : string,
  project_status : string,
  sections : any[]
}

@Component({
  selector: 'app-tasknew',
  templateUrl: './tasknew.component.html',
  styleUrls: ['./tasknew.component.css']
  // encapsulation: ViewEncapsulation.None,
})
export class TasknewComponent implements OnInit {
  name : string = "Varalaxmi";
  date: any;
  totalDate : any;
  startDate1 : any;
  maxStartDate : any;
  minEndDate : any;
  maxEndDate :any;
  statuses : any[] = ['Completed', 'Inprogress', 'Critical'];
  projectForm : FormGroup;
  projectFormSubmitted = false;
  sectionListEmpty = false;
  enableEdit = false;
  projects  : any[] = [
    {
      'project_id' : 'P101',
      'project_name' : 'Project 1',
      'project_start_date' : '25/10/21',
      'project_end_date' : '18/01/22',
      'project_status' : 'new',
      'project_toggle' : 'false',
      'sections' : [
        {
          'section_id' : 'sec101',
          'section_name' : 'Frontend developer',
          'toggle' : 'false',
          'tasks' : [
            {
              'task_id' : 'task101',
              'task_name' : 'Toolbar',
              'task_assigned_by' : 'Madhu',
              'task_taken_by' : 'Jyothi',
              'task_status' : 'new',
              'edit': false,
            },
            {
              'task_id' : 'task102',
              'task_name' : 'Mainbar',
              'task_assigned_by' : 'Seetha',
              'task_taken_by' : 'Rama',
              'task_status' : 'in_progress',
              'edit': false,
            }
          ]
        },
        {
          'section_id' : 'sec102',
          'section_name' : 'Backend developer',
          'tasks' : [
            {
              'task_id' : 'task103',
              'task_name' : 'Sidebar',
              'task_assigned_by' : 'Srinu',
              'task_taken_by' : 'Partha',
              'task_status' : 'completed',
              'edit': false,
            }
          ]
        }
      ]
    },
    {
      'project_id' : 'P102',
      'project_name' : 'Project 2',
      'project_start_date' : '05/02/22',
      'project_end_date' : '15/07/22',
      'project_status' : 'approved',
      'project_toggle' : 'false',
      'sections' : [
        {
          'section_id' : 'sec103',
          'section_name' : 'Testing Developer',
          'toggle' : 'false',
          'tasks' : [
            {
              'task_id' : 'task104',
              'task_name' : 'Form Validation',
              'task_assigned_by' : 'Varam',
              'task_taken_by' : 'Jyothi',
              'task_status' : 'completed',
            },
            {
              'task_id' : 'task105',
              'task_name' : 'Testing navbar',
              'task_assigned_by' : 'Geetha',
              'task_taken_by' : 'Swathi',
              'task_status' : 'in_progress',
            }
          ]
        }
      ]
    },
    
    
  ];

  sections : any[] = [];
  tasks : any[] = [];
  projectName : any ;
  show : any = false;
  keys : any[] = [];
  totalTime : any;
  startDate : any = true;
  endDate : any = true;
  endDate1 : any = true;
  endDate2 : any = true;

  constructor(private fb: FormBuilder) { 
    this.projectForm = this.fb.group({
      project_id : ['', [Validators.required, Validators.minLength(3)]],
      project_name : ['', Validators.required],
      project_start_date : ['', {value: "", disabled : true} ,Validators.required],
      project_end_date : ['', {value: "", disabled : true} ,Validators.required],
      project_status : ['', Validators.required],
      sections : [],
    })
  }

  ngOnInit(): void {
  }

  calculate(){
    var date = new Date();
    var day = date.getDate();
    var month =  date.getMonth() + 1;
    var year = date.getFullYear();
    this.maxStartDate = year + "-" + month + "-" + day;
    console.log(this.maxStartDate);
  }

  addProject(){
    this.projectFormSubmitted = true;
    console.log(this.projectForm.value);
    this.projects.push(this.projectForm.value);
  
    for(const item of this.projects){
      console.log(item);
    }
    console.log(this.projectFormSubmitted);
  }


  resetForm(){
    // this.projectFormSubmitted = true;
    // alert("It will reset data you entered are you sure you want to close?");
    this.projectForm.reset();
    console.log(this.projectFormSubmitted);
  }

  getSections(proId:number){
    this.fadeIn()
    for(const item of this.projects){
      if(item.project_id === proId){
        this.projectName = item.project_name;
        item.project_toggle = true;
        this.show = true;
          this.sections = item.sections;
          this.sectionListEmpty = false;
          console.log(this.sections);
          this.sections.forEach(item => {
            item.toggle = false;
          })
      }
      else{
        this.sectionListEmpty = true;
      }
    }
  }

  fadeIn(){
     var intervalId = setInterval(this.shower, 200);
  }

  shower(){
   
  }

  getTasks(secId:number){
    for(const item of this.sections){
        console.log(secId);
          if(item.section_id === secId){
            item.toggle = true;
            this.tasks = item.tasks;
            console.log(this.tasks);
            for(const task of this.tasks){
              this.keys = Object.keys(task);
              console.log(this.keys);
            }
          }
          else{
            console.log("section id not matched");
            item.toggle = false;
          }
      }
  }

  addTask() {
    this.tasks.push({});
    for(const item of this.tasks){
      if(Object.keys(item).length === 0){
        // const index2 = this.tasks.indexOf(item);
        // for(const item2 of this.tasks){
        //   if(index2 === this.tasks.indexOf(item2)){
        //     item2.edit = true;
        //     this.enableEdit = true;
        //   }
        // }
        console.log(item);
        item.edit = true;
        this.enableEdit = true;
      }
      // else{
      //   console.log(item);
      //   item.edit= false;
      //   this.enableEdit = false;
      // }
    }
  }

  deleteTask(task: any) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  editTask(task:any, index:number) {
    const index1 = this.tasks.indexOf(task);
    console.log(index1);
    for (const item of this.tasks) {
      if ((task.task_name === item.task_name) && (Object.keys(item).length !== 0) && (index === this.tasks.indexOf(item))) {
        item.edit = true;
        console.log(item);
        this.enableEdit = true;
      }
      // else if((Object.keys(item).length === 0) && (index === this.tasks.indexOf(item))){
      //   item.edit = true;
      //   console.log(item);
      //   this.enableEdit = true;
      // }
      else{
        item.edit = false;
        console.log(item);
        this.enableEdit = false;
      }
    }
    
  }
  updateTask(task:any, index:number) {
    // this.tasks.push(task);
    for (const item of this.tasks) {
      if ((task.task_name === item.task_name) && (index === this.tasks.indexOf(item))) {
        if((item.task_status === "new") || (item.task_status === "in_progress") || (item.task_status === "completed")){
          console.log(item);
          item.edit = false;
          this.enableEdit = false;
        }
        else{
          alert("status allows only new, inprogress and completed values");
        }
      }
     
      
      // else{
      //   item.edit = true;
      //   this.enableEdit = true;
      // }
    }
   
  }
  cancel(task:any) {
    for (const item of this.tasks) {
      if (task.task_name === item.task_name) {
        item.edit = false;
        this.enableEdit = false;
      }
      // else{
      //   item.edit = true;
      //   this.enableEdit = true;
      // }
    }
   
  }

  showTime(){
    this.date = new Date();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December'];
    var month = months[this.date.getMonth()];
    var a = month.substring(0, 3);
    var day = this.date.getDate();
    var year =  this.date.getFullYear();
    var h =  this.date.getHours();
    var m = this.date.getMinutes();
    var s = this.date.getSeconds();
    var session = "AM";
    if(h == 0){
      h = 12;
    }
    if(h >= 12){
      h = h-12;
      session = "PM";
    }
    h = (h < 10)? "0"+h : h;
    m = (m < 10)? "0"+m : m;
    s = (s < 10)? "0"+s : s;
    this.totalTime = day + " " + a + " " + year + " " + h + ":" + m + ":" + s + " " + session; 
    // this.totalDate = year + " "  + month + " " + day;
    // setTimeout(this.showTime, 1000);
  }

  dateFilter(startDate: any){
    // var date = new Date();
    // console.log(date);
    console.log(typeof(startDate.value));
    var date = new Date(startDate.value);
    // console.log(this.startDate1);
    // this.startDate1 = this.startDate1.getDate() + 2;
    this.startDate1 = date.getDate() + 2;
    var day = date.getDate();
    if(day < 10){
      day = 0 + day;
    }
    var month = date.getMonth()+1;
    if(month < 10){
      month = 0 + month;
    }
    var year = date.getFullYear();
    var year2 = year + 2;
    this.minEndDate = year + "-" + month + "-" + this.startDate1;
    this.maxEndDate = year2 + "-" + month  + "-" + day;
    // this.maxEndDate = this.date.setFullYear()(this.date.getFullYear() + 2);
    // this.maxEndDate = this.startDate1.setFullYear(this.startDate1.getFullYear() + 2);
    console.log(this.minEndDate);
    console.log(this.maxEndDate);
    console.log(this.startDate1);
  }

  compare(minDate : any, maxDate : any){
    console.log(minDate.value);
    console.log(maxDate.value);
    if(maxDate.value < minDate.value){
      this.projectForm.controls['project_end_date'].markAsDirty;
      // alert("project end date should be greater than" + minDate.value);
      this.endDate = false;
    }
    else if(maxDate.value > this.maxEndDate){
      this.projectForm.controls['project_end_date'].markAsDirty;
      // alert("project end date should be less than" + this.maxEndDate);
      this.endDate = true;
      this.endDate1 = false;
    }
    else if(maxDate.value < this.minEndDate){
      this.projectForm.controls['project_end_date'].markAsDirty;
      // alert("project end date should be greater than" + this.minEndDate );
      this.endDate = true;
      this.endDate1 = true;
      this.endDate2 = false;
    }
    else{
      this.endDate = true;
      this.endDate1 = true;
      this.endDate2 = true;
    }
  }

  compare1(maxDate : any){
    console.log(maxDate.value);
    console.log(this.maxStartDate);
    if(maxDate.value > this.maxStartDate){
      alert("project start date should be less than or equal to" + this.maxStartDate);
      this.startDate = false;
      this.projectForm.controls['project_start_date'].markAsDirty;
    }
    else if(maxDate.value <= this.maxStartDate){
      this.startDate = true;
    }
  }

}
