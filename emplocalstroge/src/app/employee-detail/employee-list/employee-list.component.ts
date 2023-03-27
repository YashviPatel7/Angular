import { Component, OnInit } from '@angular/core';
import { EmployeeDetailService } from '../employee-detail.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  // public getData: any[] = [];
  public data: any;

  public user: any;
  constructor(private _employeeDetailService: EmployeeDetailService) { }

  ngOnInit(): void {
    this._employeeDetailService.getEmployeeData();
    let objectkey: any = localStorage.getItem('selectKey');
    this.data = JSON.parse(objectkey);
  }

  empDelete(id: any) {
    this._employeeDetailService.deleteEmployee(id);
    // this._employeeDetailService.getEmployeeData();
    this._employeeDetailService.getEmployeeData();
    let objectkey: any = localStorage.getItem('selectKey');
    this.data = JSON.parse(objectkey);

  }
}

