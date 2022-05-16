import { Component, OnInit } from '@angular/core';
import { EmployeesComponent } from '../employees/employees.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html',
  styleUrls: ['./add-employee-dialog.component.css', '../Styles/buttonsStylesSheet.css']
})
export class AddEmployeeDialogComponent implements OnInit {
  FirstName:string ='';
  LastName:string = '';
  // Department:string='';

  departments:string[]=["IT","Dev","HR"];
  departmentControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  constructor(public dialogRef: MatDialogRef<EmployeesComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

}
