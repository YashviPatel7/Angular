import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnChanges {

  public cancel: boolean = false;

  @Output() cancelEvent = new EventEmitter()
  @Output() addevent = new EventEmitter()
  @Output() updateData = new EventEmitter()
  @Input() productData!: any;

  ngOnInit(): void {
    this.productForm.reset();
    this.btnText = "submit";
    this.changeFunction = true;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.productData) {
      console.log(this.productData);
      this.productForm.setValue({
        name: this.productData.name,
        stock: this.productData.stock,
        price: this.productData.price,
        brands: this.productData.brands,
        color: this.productData.color

      })


    }
    this.btnText = "Update";
    this.changeFunction = false

  }
  formClose() {
    this.cancelEvent.emit(this.cancel)
  }



  public editid!: number;
  public postData!: Product;
  // public currentData!: Product;
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

  addProduct() {
    this.addevent.emit(this.productForm.value)

  }
  EditProduct() {
    this.updateData.emit(this.productForm.value)
  }


}


