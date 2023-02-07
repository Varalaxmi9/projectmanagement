import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { BulletPointsComponent } from './bullet-points/bullet-points.component';
import { ButtonComponent } from './button/button.component';
import { ButtontoggleComponent } from './buttontoggle/buttontoggle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogComponent } from './dialog/dialog.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ErrorComponent } from './error/error.component';
import { ExamComponent } from './exam/exam.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { ShowPicComponent } from './show-pic/show-pic.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TasknewComponent } from './tasknew/tasknew.component';
import { TypographyComponent } from './typography/typography.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'button', component:ButtonComponent},
    {path: 'login', component:LoginComponent},

  {path: 'footer', component:FooterComponent},
  {path: 'dialog', component:DialogComponent},
  // {path: 'dashboard', component:DashboardComponent},

  { path: 'full', component: DashboardComponent, data: { fullView: true } },
  { path: 'short', component:  DashboardComponent, data: { fullView: false }},
 
  {path: 'users', component:UsersComponent},
  {path: 'hrmgmnt', component:ExamComponent},
  {path: 'employeedetails', component:ShowPicComponent},
  {path: 'attendance', component:AttendanceComponent},
  {path: 'tasknew', component:TasknewComponent},
  {path: 'reports', component:DragDropComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: '**', component:ErrorComponent},
  // {path: 'typography', component:TypographyComponent },
  // {path: 'buttontoggle', component:ButtontoggleComponent},
  // {path: 'regForm', component:RegFormComponent},
  // {path: 'side', component:SidenavComponent},
  // {path: 'reactive', component:ReactiveFormComponent}, 
  // {path: 'bullet', component:BulletPointsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
