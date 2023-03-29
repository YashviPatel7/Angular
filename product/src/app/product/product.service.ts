import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL = ' http://localhost:3000/product';
  constructor(private _http: HttpClient) { }

  /**get product details */
  getProductData() {
    return this._http.get(this.URL);
  }

  /**delete  */
  deleteProduct(id: number) {
    return this._http.delete(`${this.URL}/${id}`);
  }

  addProduct(body: any) {
    return this._http.post(this.URL, body);
  }
  getCurrentData(id: number) {
    return this._http.get(`${this.URL}/${id}`);
  }
  updateData(id: number, data: any) {
    return this._http.put(`${this.URL}/${id}`, data);
  }
}
