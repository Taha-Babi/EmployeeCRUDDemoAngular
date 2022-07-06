import { Component, OnInit } from "@angular/core"
import { Observable } from "rxjs/internal/Observable";
import { Employee } from "../Shared/Employee.Module";
import { EmployeeService } from "../Shared/EmployeeService";
@Component({
  selector: "Employee",
  templateUrl: "./Employee.Component.html",
  styleUrls: [

  ]
})
export class EmployeeComponent
{
  

  constructor(public service: EmployeeService) { }
  private subscription: Employee[];

  public employeeList: Employee[] = [];
  ngOnInit()
  {
    this.service.RefreshEmployeesList()
      .subscribe(list => {
        this.employeeList = list as Employee[];
        console.log(this.employeeList);
      });

  }
  
}
