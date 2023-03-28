import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDetailService } from '../employee-detail.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  public employeeForm!: FormGroup;
  public localData: any = localStorage.getItem('selectKey');
  public length = JSON.parse(this.localData).length;

  constructor(private _employeeDetailService: EmployeeDetailService, private router: Router) {
    // console.log("sssssssssss",this.employeeForm)
    this.employeeForm = new FormGroup({
      'id': new FormControl(this.length + 1),
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
    })
  }

  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.employeeForm.value);
    this._employeeDetailService.employeeAdd(this.employeeForm.value);
    this.router.navigate(['employee/list']);
  }



}
