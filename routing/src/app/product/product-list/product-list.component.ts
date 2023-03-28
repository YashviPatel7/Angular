import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public product = [{ id: 1, name: "product1" }, { id: 2, name: "product2" }, { id: 3, name: "product3" }, { id: 4, name: "product4" }, { id: 5, name: "product5" }];

}
