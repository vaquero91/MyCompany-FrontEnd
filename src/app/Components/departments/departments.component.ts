import { Component, OnInit } from '@angular/core';
import { IDepartments } from './IDepartments';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddDepartmentDialogComponent } from '../add-department-dialog/add-department-dialog.component';
import { EditDepartmentDialogComponent } from '../edit-department-dialog/edit-department-dialog.component';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css','../Styles/buttonsStylesSheet.css']
})
export class DepartmentsComponent implements OnInit {

  departments:IDepartments[] =[
    {
      PK_Department:1,
      "DepartmentName":"Dev",
      Active:false
    },  {
      PK_Department:1,
      "DepartmentName":"Dev",
      Active:false
    },  {
      PK_Department:1,
      "DepartmentName":"Dev",
      Active:false
    },  {
      PK_Department:1,
      "DepartmentName":"Dev",
      Active:false
    },
    ];
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

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

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }
}
