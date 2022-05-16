import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentsComponent } from './Components/departments/departments.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './Components/EditEmployeeDialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeDialogComponent } from './Components/add-employee-dialog/add-employee-dialog.component';
import { AddDepartmentDialogComponent } from './Components/add-department-dialog/add-department-dialog.component';
import { EditDepartmentDialogComponent } from './Components/edit-department-dialog/edit-department-dialog.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DepartmentsComponent,
    DialogComponent,
    AddEmployeeDialogComponent,
    AddDepartmentDialogComponent,
    EditDepartmentDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
