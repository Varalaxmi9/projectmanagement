import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ReactiveFormsModule,  FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';

const matComponents = [
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatButtonToggleModule,
  ReactiveFormsModule,
  FormsModule,
  MatGridListModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatRadioModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatTabsModule,
  MatStepperModule,
  
];

@NgModule({
  imports: [matComponents],
  exports: [matComponents]
})
export class MaterialModule { }
