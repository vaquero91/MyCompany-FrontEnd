import { Component, OnInit } from '@angular/core';
import { IDepartments } from './IDepartments';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
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
  constructor() { }

  ngOnInit(): void {
  }

}
