import { Component, OnInit,Inject  } from '@angular/core';
import { IEmployee } from './IEmployee';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../EditEmployeeDialog/dialog.component';
import { AddEmployeeDialogComponent } from '../add-employee-dialog/add-employee-dialog.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css', '../Styles/buttonsStylesSheet.css']
})
export class EmployeesComponent implements OnInit {

  employees:IEmployee[] = [{
    FirstName:"Juan",
    LastName:"Hurtado",
    Active:true,
    PK_Employee:1,
    Department:{
      Active:true,
      DepartmentName:"Dev",
      PK_Department:1
    }},
    {
      FirstName:"Pablo",
      LastName:"Hurtado",
      Active:true,
      PK_Employee:1,
      Department:{
        Active:true,
        DepartmentName:"Dev",
        PK_Department:1
      }},   {
        FirstName:"Mac",
        LastName:"Hurtado",
        Active:true,
        PK_Employee:1,
        Department:{
          Active:true,
          DepartmentName:"Dev",
          PK_Department:1
        }},   {
          FirstName:"Vaquero",
          LastName:"Hurtado",
          Active:true,
          PK_Employee:1,
          Department:{
            Active:true,
            DepartmentName:"Dev",
            PK_Department:1
          }},

  ];
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(employee:IEmployee): void {
    const dialogRef = this.matDialog.open(DialogComponent, {
      width: '250px',
      data: employee,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }
  OpenAddDialog(): void {
    const dialogRef = this.matDialog.open(AddEmployeeDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
