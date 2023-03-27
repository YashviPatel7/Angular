import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService implements OnInit {

  public empData: any;
  public returnEmpData: any;
  public objdata: any;
  public deleteId: any;


  constructor() {
    this.empData = [{ "id": 1, "name": "pari", "email": "patelyashvi7@gmail.com", "password": "yash@123", "address": "valsad" },
    { "id": 2, "name": "jiyan", "email": "patelyashvi7@gmail.com", "password": "yash@123", "address": "valsad" },
    { "id": 3, "name": "yash", "email": "patelyashvi7@gmail.com", "password": "yash@123", "address": "valsad" },
    { "id": 4, "name": "jal", "email": "patelyashvi7@gmail.com", "password": "yash@123", "address": "valsad" },
    { "id": 5, "name": "jiya", "email": "patelyashvi7@gmail.com", "password": "yash@123", "address": "valsad" },
    { "id": 6, "name": "raja", "email": "patelyashvi7@gmail.com", "password": "yash@123", "address": "valsad" },
    { "id": 7, "name": "lata", "email": "patelyashvi7@gmail.com", "password": "yash@123", "address": "valsad" }]
  }
  ngOnInit(): void {

  }


  /**get employee details */
  getEmployeeData() {
    if (localStorage.length == 0) {
      localStorage.setItem('selectKey', JSON.stringify(this.empData));
      return this.empData;
    }
    else {
      this.returnEmpData = localStorage.getItem('selectKey');
      return JSON.parse(this.returnEmpData);
    }

  }

  /**delete */
  deleteEmployee(id: any) {
    this.returnEmpData = localStorage.getItem('selectKey');
    console.log(this.returnEmpData);

    this.objdata = JSON.parse(this.returnEmpData);
    console.log(this.objdata);
    this.deleteId = this.objdata.find((item: { id: any; }) => item.id == id);
    console.log(this.deleteId);
    this.objdata.splice(this.objdata.indexOf(this.deleteId), 1);
    localStorage.setItem('selectKey', JSON.stringify(this.objdata));
    console.log(this.objdata);

    // this.returnEmpData = localStorage.getItem('selectKey');
    // return JSON.parse(this.returnEmpData);
  }

  employeeAdd(body: any) {
    // return this._http.post(this.URL, body)
  }

}
