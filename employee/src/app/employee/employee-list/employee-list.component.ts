import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public empdata: any;
  constructor(private _employeeService: EmployeeService) { }

  getdata() {
    this._employeeService.getEmployeeData().subscribe((items => {
      this.empdata = items;
    }))
  }
  ngOnInit(): void {
    this.getdata();


  }
  empDelete(id: number) {
    this._employeeService.deleteEmp(id).subscribe();
    // this._employeeService.getEmployeeData().subscribe((items) => {
    //   this.empdata = items
    // })
    this.getdata();

  }
}




