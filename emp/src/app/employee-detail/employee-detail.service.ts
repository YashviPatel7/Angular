import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {
  

  private URL='http://localhost:3000/employee';
  constructor(private _http:HttpClient) { }

  /**get employee details */
  getEmployeeData(){
    return this._http.get(this.URL);
  }

  /**delete */
  deleteEmployee(id:number){
    return this._http.delete(`${this.URL}/${id}`);
  }

  employeeAdd(body:any){
    return this._http.post(this.URL,body)
  }
  
}
