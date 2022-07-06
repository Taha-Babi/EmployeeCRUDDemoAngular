import { Injectable } from "@angular/core"
import { Employee } from "./Employee.Module"
import { HttpClient } from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})

export class EmployeeService
{
  constructor(private http:HttpClient) { }
  employeeFormData: Employee = new Employee();
  public employeesList: Employee[];
  readonly url = "https://localhost:7075/api/employee";
  PostEmployeeData()
  {
    return this.http.post(this.url, this.employeeFormData +"/insert")
  }

  RefreshEmployeesList() 
  {
    return this.http.get(this.url);

  }
}
