import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from './product';
import { Observable } from 'rxjs';

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
  /**post data */
  addProduct(body: Product): Observable<Product> {
    return this._http.post<Product>(this.URL, body);
  }
  /**display one recode in form */
  getCurrentData(id: number): Observable<Product> {
    return this._http.get<Product>(`${this.URL}/${id}`);
  }
  /**update data */
  updateData(id: number, data: Product) {
    return this._http.put(`${this.URL}/${id}`, data);
  }
}

