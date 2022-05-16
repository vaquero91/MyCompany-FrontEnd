import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartmentsComponent } from '../departments/departments.component';
import { IDepartments } from '../departments/IDepartments';

@Component({
  selector: 'app-edit-department-dialog',
  templateUrl: './edit-department-dialog.component.html',
  styleUrls: ['./edit-department-dialog.component.css','../Styles/buttonsStylesSheet.css']
})
export class EditDepartmentDialogComponent implements OnInit {
  DepartmentName:string='';
  Department:IDepartments;
  departments:string[]=["IT","Dev","HR"];
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  constructor(public dialogRef: MatDialogRef<DepartmentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDepartments,) { this.Department = data }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
