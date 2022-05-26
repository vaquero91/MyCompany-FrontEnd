import { Component, OnInit,Inject  } from '@angular/core';
import { IEmployee } from './IEmployee';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../EditEmployeeDialog/dialog.component';
import { AddEmployeeDialogComponent } from '../add-employee-dialog/add-employee-dialog.component';
import { EmployeeService } from 'src/app/Services/EmployeeService.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css', '../Styles/buttonsStylesSheet.css']
})
export class EmployeesComponent implements OnInit {

  _employeesService:EmployeeService;
  employeesFromBackEnd:IEmployee[] = [];

  constructor(private matDialog: MatDialog, private empoyeeService:EmployeeService) {
    this._employeesService = empoyeeService;

    this._employeesService.getEmployeesAPI().subscribe((value) => {
      this.employeesFromBackEnd = value
    });
  }

  ngOnInit(): void {
    // this.employees = this._employeesService.getEmployees();
  }

  openDialog(employee:IEmployee): void {
    const dialogRef = this.matDialog.open(DialogComponent, {
      width: '250px',
      data: employee,
    });

    dialogRef.afterClosed().subscribe(result => {  });

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

  DeleteEmployee(employee:IEmployee){
    this._employeesService.deleteEmployee(employee);
  }
}
