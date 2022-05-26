import { IDepartments } from "../departments/IDepartments";

export interface IEmployee{
  PK_Employee?:number;
  FirstName:string;
  LastName:string;
  Active:boolean;
  FK_Department?:number;
  Department:IDepartments;
}
