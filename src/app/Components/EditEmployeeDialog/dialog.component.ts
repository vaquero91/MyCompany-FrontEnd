import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeesComponent } from '../employees/employees.component';
import { IEmployee } from '../employees/IEmployee';
import { FormControl, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/Services/DepartmentService.service';
import { EmployeeService } from 'src/app/Services/EmployeeService.service';
import { ThisReceiver } from '@angular/compiler';
import { IDepartments } from '../departments/IDepartments';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css','../Styles/buttonsStylesSheet.css']
})

export class DialogComponent implements OnInit {


  EmployeeFirstName:string | undefined;
  EmployeeLastName:string | undefined;
  DepartmentSelected = {} as IDepartments;

  departmentsList:string[] = [];
  departments:IDepartments[] = [];
  departmentControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  departmentSelect:string='';

  employee:IEmployee;

  _departmentService:DepartmentService;
  _employeeService:EmployeeService;
  constructor(public dialogRef: MatDialogRef<EmployeesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEmployee,private departmentService:DepartmentService, private employeeService:EmployeeService) {
      this.employee = data;
      this._departmentService = departmentService;
      this._employeeService = employeeService;
      this._departmentService.getDepartmentsList().asObservable().subscribe((value) => {
        this.departmentsList = value;
      });
      this._departmentService.getDepartments().subscribe((value) =>{ this.departments = value })
    }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  EditEmployee(){
    console.log(this.DepartmentSelected);
    var FName = this.EmployeeFirstName !=null ? this.EmployeeFirstName : this.employee.FirstName;
    var LName = this.EmployeeLastName != null ? this.EmployeeLastName : this.employee.LastName;
    var result:IEmployee ={FirstName: FName, LastName:LName, PK_Employee:this.employee.PK_Employee, Active:true, Department:this.DepartmentSelected};
    this._employeeService.editEmployee(result);
    this.close();
  }

  private findDepartment(department:string | undefined){
    return this.departments.filter((x) =>{
      return x.DepartmentName == department;
    })
  }

}
