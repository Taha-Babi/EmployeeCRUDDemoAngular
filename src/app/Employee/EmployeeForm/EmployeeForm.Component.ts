import { Component, OnInit } from "@angular/core"
import { NgForm } from "@angular/forms";
import { Employee } from "../../Shared/Employee.Module";
import { EmployeeService } from "../../Shared/EmployeeService";

@Component({
  selector: "EmployeeForm",
  templateUrl: './Employee.Form.Component.html',
  styleUrls: []
})

export class EmployeeForm implements OnInit
{
  constructor( public Service: EmployeeService) { }

  
  public ngOnInit()
  {

  }

  onSubmit(form: NgForm)
  {
    this.Service.PostEmployeeData().subscribe(
      res =>
      {
        alert("Done");
        this.ResetInputs(form);
      },
      err =>
      {
        console.log(err)
      }
    );
  }
  ResetInputs(form: NgForm)
  {
    form.form.reset();
    this.Service.employeeFormData = new Employee();
  }
}
