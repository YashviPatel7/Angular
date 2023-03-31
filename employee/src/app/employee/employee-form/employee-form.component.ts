import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  public employeeRecode!: FormGroup;
  public postData: any;
  public empdata: any;
  constructor(private _employeeService: EmployeeService) {
    // console.log("sssssssssss",this.employeeForm)
    this.employeeRecode = new FormGroup({
      name: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      // male: new FormControl(null, Validators.required),
      // female: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      salary: new FormControl(null, Validators.required),
    })
  }
  getdata() {
    this._employeeService.getEmployeeData().subscribe((items => {
      this.empdata = items;
    }))
  }
  ngOnInit(): void {

  }
  addEmployee() {

    this._employeeService.addEmp(this.employeeRecode.value).subscribe((res: any) =>
      this.postData = res);
    console.log("ss", this.employeeRecode.value);
    this.getdata();
  }

}
