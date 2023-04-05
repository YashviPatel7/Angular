import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public toggle: boolean = false
  public product: any;
  data1: any;
  id: any;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getData()
  }
  callingEvent(data: boolean) {
    this.toggle = data;
  }

  closeform(data: boolean) {
    this.toggle = data;

  }
  editEvent(id: any) {
    this._productService.getCurrentData(id).subscribe((res) => {
      this.product = res;
      console.log(this.product);
      this.id = id

    })
    this.toggle = true;
  }
  addevent(data: any) {
    this._productService.addProduct(data).subscribe((data) => data);
    this.getData()

  }
  getData() {
    this._productService.getProductData().subscribe((items => {
      this.data1 = items;
    }))
  }
  productDelete(id: number) {
    this._productService.deleteProduct(id).subscribe();
    this.getData()
  }
  updateProductdata(body: any) {
    this._productService.updateData(this.id, body).subscribe(res => res)
    this.getData();
  }


}
