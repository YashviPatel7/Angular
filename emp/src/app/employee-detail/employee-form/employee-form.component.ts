import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeDetailService } from '../employee-detail.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private _employeeDetailService: EmployeeDetailService) {
    // console.log("sssssssssss",this.employeeForm)
    this.employeeForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
    })
  }

  ngOnInit(): void {

  }
  addEmployee() {
    this._employeeDetailService.employeeAdd(this.employeeForm);
    console.log("ss", this.employeeForm.value)
  }
  public employeeForm!: FormGroup;


}
