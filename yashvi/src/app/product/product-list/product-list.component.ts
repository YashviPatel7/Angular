import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Output() myEvent = new EventEmitter()
  public isActivet: boolean = true;

  @Output() editEvent = new EventEmitter()
  @Output() deleteEvent = new EventEmitter()
  @Input() data: any;

  ngOnInit(): void {

  }
  toggleform() {
    this.myEvent.emit(this.isActivet)
  }


  public product!: Product[];
  constructor(private _productService: ProductService) { }


  productDelete(id: any) {
    this.deleteEvent.emit(id);
  }
  productEditwithid(id: any) {
    this.myEvent.emit(this.isActivet)
    this.editEvent.emit(id);


  }




}
