import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private URL = 'http://localhost:3000/employeedata';
  constructor(private _http: HttpClient) { }

  /* get data*/
  getEmployeeData() {
    return this._http.get(this.URL);
  }

  /* delete */
  deleteEmp(id: number) {
    return this._http.delete(`${this.URL}/${id}`);
  }

  /* post data*/
  addEmp(body: any) {
    return this._http.post(this.URL, body);
  }
}
