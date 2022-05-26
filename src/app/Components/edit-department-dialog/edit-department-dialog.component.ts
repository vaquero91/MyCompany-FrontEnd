import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/Services/DepartmentService.service';
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
  _DepartmentService :DepartmentService;
  validation:boolean =true;

  constructor(public dialogRef: MatDialogRef<DepartmentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDepartments,private departmentService:DepartmentService) {
      this.Department = data
      this._DepartmentService = departmentService;
      this._DepartmentService.getValidation().asObservable().subscribe((value) => this.validation = value);
    }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  UpdateDepartment(){
    this.Department.DepartmentName = this.DepartmentName;
    console.log(this.validation);
    this._DepartmentService.EditDepartment(this.Department);
    console.log(this.validation);
    if(this.validation){
      this.DepartmentName = '';
      this.close();
    }
  }
}
