import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
