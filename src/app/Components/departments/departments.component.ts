import { Component, OnInit } from '@angular/core';
import { IDepartments } from './IDepartments';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddDepartmentDialogComponent } from '../add-department-dialog/add-department-dialog.component';
import { EditDepartmentDialogComponent } from '../edit-department-dialog/edit-department-dialog.component';
import { DepartmentService } from 'src/app/Services/DepartmentService.service';
import { IDepartmentsBE } from './IDepartmentBE';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css','../Styles/buttonsStylesSheet.css']
})
export class DepartmentsComponent implements OnInit {

  _departmentService:DepartmentService;
  departmentsFromBackEnd:IDepartments[] = [];
  departments:IDepartments[] =[];
  constructor(private matDialog: MatDialog, private departmentService:DepartmentService) {
    this._departmentService = departmentService;
    // this._departmentService.getDepartments().subscribe((value) => {
    //   console.log("This is the Value "+value)
    //   this.departments = value.filter(x => x.Active == true);
    // })
    this._departmentService.getDepartmentsAPI().subscribe((value) => {
      value.forEach(x => {console.log(x)});
      this.departmentsFromBackEnd = value;
    });
  }

  ngOnInit(): void {  }

  openDialog(): void {
    const dialogRef = this.matDialog.open(AddDepartmentDialogComponent, {
      width: '250px',
      // data: employee,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }

  openEditDialog(Department:IDepartments): void {
    const dialogRef = this.matDialog.open(EditDepartmentDialogComponent, {
      width: '250px',
      data: Department,
    });

    dialogRef.afterClosed().subscribe(result => {  });

  }

  DeleteDepartment(department:IDepartments){
    this._departmentService.deleteDepartment(department);
  }
}
