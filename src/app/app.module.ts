import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from './Employee/Employee.Component'
import { EmployeeForm } from './Employee/EmployeeForm/EmployeeForm.Component'
import { EmployeeService } from './Shared/EmployeeService'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, EmployeeForm
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

