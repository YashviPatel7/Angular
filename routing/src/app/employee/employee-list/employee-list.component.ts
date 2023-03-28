import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public emp = [{ id: 1, name: "annu", department: "MBA", gender: 'Female' },
  { id: 2, name: "ramu", department: "MCA", gender: 'Male' },
  { id: 3, name: "anushka", department: "MBA", gender: 'Female' },
  { id: 4, name: "ravi", department: "MCA", gender: 'Male' },
  { id: 5, name: "annu", department: "MBA", gender: 'Female' },
  { id: 6, name: "ravi", department: "MCA", gender: 'Male' },
  ]

}

