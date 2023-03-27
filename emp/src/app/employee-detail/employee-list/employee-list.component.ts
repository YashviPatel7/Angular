import { Component, OnInit } from '@angular/core';
import { EmployeeDetailService } from '../employee-detail.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  // public getData: any[] = [];
  // public getData: any;

  public user: any;
  constructor(private _employeeDetailService: EmployeeDetailService) { }

  ngOnInit(): void {
    this._employeeDetailService.getEmployeeData().subscribe((items => {
      this.user = items;
      console.log("employee data list", this.user)
    }));
  }
  empDelete(id: number) {
    this._employeeDetailService.deleteEmployee(id).subscribe();
    this._employeeDetailService.getEmployeeData().subscribe((item) => {
      this.user = item
    })
  }

}
