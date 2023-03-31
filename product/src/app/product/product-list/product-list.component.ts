import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public product!: Product[];
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._productService.getProductData().subscribe((items => {
      this.product = items;
      console.log("product data", this.product);

    }))
  }
  productDelete(id: number) {
    this._productService.deleteProduct(id).subscribe();
    this.getData();
  }

}
