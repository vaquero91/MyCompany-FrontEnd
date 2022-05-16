import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeesComponent } from '../employees/employees.component';
import { IEmployee } from '../employees/IEmployee';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css','../Styles/buttonsStylesSheet.css']
})

export class DialogComponent implements OnInit {
  EmployeeFirstName:string | undefined;
  EmployeeLastName:string | undefined;
  Department:string | undefined;

  departments:string[]=["IT","Dev","HR"];
  departmentControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  employee:IEmployee;
  constructor(public dialogRef: MatDialogRef<EmployeesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEmployee,) { this.employee = data }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
