import { Component, OnInit } from '@angular/core';
import { EmployeesComponent } from '../employees/employees.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/Services/DepartmentService.service';
import { EmployeeService } from 'src/app/Services/EmployeeService.service';
import { IEmployee } from "../employees/IEmployee";
import { IDepartments } from '../departments/IDepartments';


@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html',
  styleUrls: ['./add-employee-dialog.component.css', '../Styles/buttonsStylesSheet.css']
})
export class AddEmployeeDialogComponent implements OnInit {
  FirstName:string ='';
  LastName:string = '';
  SelectedDepartment = {} as IDepartments;

  departmentControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  departments:IDepartments[] = [];

  _departmentService:DepartmentService;
  _employeeService:EmployeeService;
  constructor(public dialogRef: MatDialogRef<EmployeesComponent>,
    private departmentService:DepartmentService, private employeeService:EmployeeService) {

      this._departmentService = departmentService;
      this._departmentService.getDepartments().subscribe((value) =>{ this.departments = value });
      this._employeeService = employeeService;
  }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

  AddEmployee(){

    var NewEmployee:IEmployee = {Active:true, FirstName: this.FirstName, LastName:this.LastName, Department:this.SelectedDepartment}
    this._employeeService.newEmployee(NewEmployee);
    this.close();
  }

  changeValue(value:string){
    console.log(value);
  }

}
