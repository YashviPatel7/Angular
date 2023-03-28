import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employeeid: any;
  public employeeName: any
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {

    this.employeeid = this.route.snapshot.paramMap.get('id');
    this.employeeName = this.route.snapshot.paramMap.get('name');
    console.log(this.employeeid);
    console.log(this.employeeName);

  }
}
