import { Component, OnInit } from '@angular/core';
import { IEmployee } from './IEmployee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
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
      FirstName:"Juan",
      LastName:"Hurtado",
      Active:true,
      PK_Employee:1,
      Department:{
        Active:true,
        DepartmentName:"Dev",
        PK_Department:1
      }},   {
        FirstName:"Juan",
        LastName:"Hurtado",
        Active:true,
        PK_Employee:1,
        Department:{
          Active:true,
          DepartmentName:"Dev",
          PK_Department:1
        }},   {
          FirstName:"Juan",
          LastName:"Hurtado",
          Active:true,
          PK_Employee:1,
          Department:{
            Active:true,
            DepartmentName:"Dev",
            PK_Department:1
          }},

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
