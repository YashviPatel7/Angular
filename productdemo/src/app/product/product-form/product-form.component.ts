import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public editid!: number;
  public postData!: Product;
  public currentData!: Product;
  public alert!: boolean;
  public mag!: string;
  btnText = "submit";
  changeFunction = true;

  public productForm!: FormGroup;
  constructor(private _productservice: ProductService, private router: ActivatedRoute) {
    this.productForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      stock: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      brands: new FormControl(null, Validators.required),
      color: new FormControl(null, Validators.required)
    })
    this.editid = Number(this.router.snapshot.paramMap.get('id'));

  }
  ngOnInit(): void {

    if (this.editid != null) {
      this.updateProduct();
    }

  }
  addProduct() {
    this._productservice.addOnSubject.next(this.productForm.value);
    this._productservice.addProduct(this.productForm.value).subscribe((res) =>
      this.postData = res

    );
    this.mag = "submited"
    console.log("ss", this.productForm.value);
    this.alert = true;
  }

  updateProduct() {
    // console.log("kjgkshgh", this.router.snapshot.params.id);
    console.log(this.editid)
    if (this.editid) {
      this._productservice.getCurrentData(this.editid).subscribe((result) => {
        console.log(result);
        this.currentData = result;

        this.productForm.setValue({
          name: this.currentData.name,
          stock: this.currentData.stock,
          price: this.currentData.price,
          brands: this.currentData.brands,
          color: this.currentData.color

        });
        this.btnText = "Update";
        this.changeFunction = false
      })
    }


  }

  EditProduct() {
    this._productservice.updateData(this.router.snapshot.params['id'], this.productForm.value).subscribe((result) => {
      console.log(result, "data updated success fully");
      this.mag = "updated"
      this.alert = true;
    })
  }
  closeAlert() {
    this.alert = false;
  }
}

