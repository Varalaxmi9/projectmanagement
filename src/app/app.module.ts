import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { TypographyComponent } from './typography/typography.component';
import { ButtonComponent } from './button/button.component';
import { ButtontoggleComponent } from './buttontoggle/buttontoggle.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from '../app/reactive-form/reactive-form.component';
import { DialogComponent } from './dialog/dialog.component';
import { ExamComponent } from './exam/exam.component';
import { ShowPicComponent } from './show-pic/show-pic.component';
import { TasknewComponent } from './tasknew/tasknew.component';
import { BulletPointsComponent } from './bullet-points/bullet-points.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { MatIconModule } from '@angular/material/icon';
import { RegFormComponent } from './reg-form/reg-form.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AttendanceComponent } from './attendance/attendance.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    TypographyComponent,
    ButtonComponent,
    ButtontoggleComponent,
    UsersComponent,
    ReactiveFormComponent,
    DialogComponent,
    ExamComponent,
    ShowPicComponent,
    TasknewComponent,
    BulletPointsComponent,
    DragDropComponent,
    RegFormComponent,
    DashboardComponent,
    FooterComponent,
    AttendanceComponent,
    ErrorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  // entryComponents: [DialogComponent]
})
export class AppModule { }
