import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/Services/DepartmentService.service';
import { DepartmentsComponent } from '../departments/departments.component';

@Component({
  selector: 'app-add-department-dialog',
  templateUrl: './add-department-dialog.component.html',
  styleUrls: ['./add-department-dialog.component.css', '../Styles/buttonsStylesSheet.css']
})
export class AddDepartmentDialogComponent implements OnInit {
  DepartmentName:string='';
  _departmentService:DepartmentService;
  constructor(public dialogRef: MatDialogRef<DepartmentsComponent>, private departmentService:DepartmentService) { this._departmentService = departmentService }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
  closeAndSend(){
    this._departmentService.newDepartment(this.DepartmentName)
    this.close();
  }
}
