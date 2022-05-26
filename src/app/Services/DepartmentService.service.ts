import { ContentChild, Injectable } from "@angular/core";
import { IDepartments } from "../Components/departments/IDepartments";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse,HttpHeaders  } from "@angular/common/http";
import { ReturnStatement } from "@angular/compiler";
import { REFERENCE_PREFIX } from "@angular/compiler/src/render3/view/util";
import { catchError, tap } from "rxjs";
import { IEmployee } from "../Components/employees/IEmployee";
import { Constants } from "../constants"
import { IDepartmentsBE } from "../Components/departments/IDepartmentBE";
@Injectable({
  providedIn: 'root'
})

export class DepartmentService{

  headers= Constants.headers;

  public departmentValidation:BehaviorSubject<boolean>;
  departments:IDepartments[] =[
    {
      PK_Department:1,
      "DepartmentName":"Dev",
      Active:true
    },  {
      PK_Department:2,
      "DepartmentName":"HR",
      Active:true
    },  {
      PK_Department:3,
      "DepartmentName":"Marketing",
      Active:true
    },  {
      PK_Department:4,
      "DepartmentName":"Sales",
      Active:true
    },
  ];

  public DepartmentList:BehaviorSubject<IDepartments[]>;
  private list:IDepartments[] =[];
  constructor(private http:HttpClient){
    this.DepartmentList = new BehaviorSubject<IDepartments[]>(this.departments);
    this.departmentValidation = new BehaviorSubject<boolean>(true);
    this.getDepartments().subscribe((value) =>{this.list = value});
  }

  getDepartments():Observable<IDepartments[]>{
    var result = this.DepartmentList.asObservable();
    // var result = this.getDepartmentsAPI();
    return result;
  }

  findDepartment(departmentName:string):IDepartments[] {
    var result = this.list.filter( x => x.DepartmentName == departmentName);

    return result;
  }
  deleteDepartment(department:IDepartments){
    department.Active = false;
    this.DepartmentList.next(this.DeactivateDepartment(department));
  }

  EditDepartment(department:IDepartments){
    this.verifyNewDataSet(department);
    if(this.departmentValidation) this.DepartmentList.next(this.ChangeDepartmentName(department))
    else console.log('no paso');
  }

  getDepartmentsList():BehaviorSubject<string[]>{
    var list:string[] =  []
    this.list.forEach(x => {
      if(x.Active) list.push(x.DepartmentName)});
    return new BehaviorSubject<string[]>(list);;
  }

  newDepartment(department:string){
    // department.PK_Department = this.list.length
    var result:IDepartments ={DepartmentName:department, PK_Department:this.list.length,Active:true}
    var newArray = this.list;
    newArray.push(result);
    this.DepartmentList.next(newArray);

  }


  getValidation():BehaviorSubject<boolean>{
    return this.departmentValidation;
  }

  getDepartmentsAPI(): Observable<IDepartments[]>{
    return this.http.get<IDepartments[]>(Constants.API_ENDPOINT+'Department',{'headers':this.headers}).pipe(
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

  private verifyNewDataSet(department:IDepartments){
  // validacion logica
    this.list.forEach(x => {
      if(x.PK_Department === department.PK_Department && x.DepartmentName == department.DepartmentName){

        console.log('Validation failed, same ID and Name');
        this.departmentValidation.next(false);
      }
    });

  }

  private ChangeDepartmentName(department:IDepartments):IDepartments[]{
    var result = this.list;
    result.forEach(x =>{
      if(x.PK_Department == department.PK_Department) {
        x.DepartmentName = department.DepartmentName;
        console.log(x.DepartmentName);
        console.log(department.DepartmentName);

      }
    })

    return result;
  }

  private DeactivateDepartment(department:IDepartments):IDepartments[]{
    var result:IDepartments[] = this.departments;
    result.forEach(x => {
      if(x.PK_Department == department.PK_Department) x.Active = false;
    });

    return result;
  }

}
