import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailRoutingModule } from './employee-detail-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeDetailService } from './employee-detail.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    EmployeeDetailRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[EmployeeDetailService]
})
export class EmployeeDetailModule { }
