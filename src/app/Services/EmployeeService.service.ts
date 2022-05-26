import { Injectable } from "@angular/core";
import { IEmployee } from "../Components/employees/IEmployee";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { ReturnStatement } from "@angular/compiler";
import { REFERENCE_PREFIX } from "@angular/compiler/src/render3/view/util";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs";
import { Constants } from "../constants"

@Injectable({
  providedIn: 'root'
})

export class EmployeeService{
  headers = Constants.headers;

  employees:IEmployee[] = [{
    FirstName:"Juan",
    LastName:"Hurtado",
    Active:true,
    PK_Employee:1,
    Department:{
      Active:true,
      DepartmentName:"HR",
      PK_Department:2
    }
  },
  {
    FirstName:"Pablo",
    LastName:"Hurtado",
    Active:true,
    PK_Employee:2,
    Department:{
      Active:true,
      DepartmentName:"Dev",
      PK_Department:1
    }},
  {
    FirstName:"Mac",
    LastName:"Hurtado",
    Active:true,
    PK_Employee:3,
    Department:{
      Active:true,
      DepartmentName:"Marketing",
      PK_Department:3
    }},
  {
    FirstName:"Vaquero",
    LastName:"Hurtado",
    Active:true,
    PK_Employee:4,
    Department:{
      Active:true,
      DepartmentName:"Sales",
      PK_Department:4
    }},

  ];
  private list:IEmployee[] =[];

  public EmployeesList:BehaviorSubject<IEmployee[]>

  constructor(private http:HttpClient){
    this.EmployeesList = new BehaviorSubject<IEmployee[]>(this.employees);
    this.getEmployees().subscribe((value) =>{ this.list = value });
  }

  getEmployees():Observable<IEmployee[]>{
    var result = this.EmployeesList.asObservable();
    return result;
  }

  deleteEmployeeFromBackEnd(){
    return this.http.get<IEmployee[]>(Constants.API_ENDPOINT+'EmployeeControler',{'headers':this.headers}).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  deleteEmployee(employee:IEmployee){
    console.log(employee.LastName);
    // employee.Active = false;
    this.EmployeesList.next(this.DeactivateEmployee(employee))
  }

  editEmployee(employee:IEmployee){
    this.EmployeesList.next(this.FindAndEditEmployee(employee));
  }

  newEmployee(employee:IEmployee){
    var result = this.employees;
    result.push(employee);
    // console.log(result);
    this.EmployeesList.next(result);

  }

  getEmployeesAPI(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(Constants.API_ENDPOINT+'EmployeeControler',{'headers':this.headers}).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
    // return this.http.get()
  }

  private handleError(err:HttpErrorResponse){
    let errorMessage='';

    if(err.error instanceof ErrorEvent){
      errorMessage=`An error occurred ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }

  private FindAndEditEmployee(employee:IEmployee):IEmployee[]{
    var result:IEmployee[]=this.list;
    result.forEach(x => {
      if(x.PK_Employee == employee.PK_Employee) {
        x.FirstName = employee.FirstName;
        x.LastName = employee.LastName;
      }

    })
    return result;
  }

  private DeactivateEmployee(employee:IEmployee):IEmployee[]{
    var result:IEmployee[] = this.list;
    result.forEach(x => {
      if(x.PK_Employee == employee.PK_Employee) x.Active = false;
    });

    return result;
  }

}
