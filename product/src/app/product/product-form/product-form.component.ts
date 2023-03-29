import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  public postData: any;
  public currentData: any;
  public alert: any;
  public productForm!: FormGroup;
  constructor(private _productservice: ProductService, private router: ActivatedRoute) {
    this.productForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      stock: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      brands: new FormControl(null, Validators.required),
      color: new FormControl(null, Validators.required)
    })
  }
  ngOnInit(): void {
    this.updateProduct();
  }
  addProduct() {
    this._productservice.addProduct(this.productForm.value).subscribe((res: any) =>
      this.postData = res);
    console.log("ss", this.productForm.value);
  }
  updateProduct() {
    // console.log("kjgkshgh", this.router.snapshot.params.id);

    this._productservice.getCurrentData(this.router.snapshot.params['id']).subscribe((result) => {
      console.log(result);
      this.currentData = result;

      this.productForm.setValue({
        name: this.currentData.name,
        stock: this.currentData.stock,
        price: this.currentData.price,
        brands: this.currentData.brands,
        color: this.currentData.color

      });
    })
  }
  EditProduct() {
    this._productservice.updateData(this.router.snapshot.params['id'], this.productForm.value).subscribe((result) => {
      console.log(result, "data updated success fully");
      this.alert = true;
    })
  }
  closeAlert() {
    this.alert = false;
  }
}