import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product: any;
  public productNew: any;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {

    this.product = this.route.snapshot.paramMap.get('id');
    this.productNew = JSON.parse(this.product);
    console.log(this.productNew);

  }

}
