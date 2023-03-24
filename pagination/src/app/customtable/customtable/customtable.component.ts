import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customtable',
  templateUrl: './customtable.component.html',
  styleUrls: ['./customtable.component.css']
})
export class CustomtableComponent implements OnInit {

  public limit: number = 10;
  public totalBtn: any;
  public btnArr: number[] = [];
  public firstIndex: any;
  public lastIndex: any;
  public newdata: any;
  public data = [
    { id: 1, name: "iphone", genre: "Strategy" },
    { id: 2, name: "iphone", genre: "Strategy" },
    { id: 3, name: "iphone", genre: "Strategy" },
    { id: 4, name: "iphone", genre: "Strategy" },
    { id: 5, name: "iphone", genre: "Strategy" },
    { id: 6, name: "iphone", genre: "Strategy" },
    { id: 7, name: "iphone", genre: "Strategy" },
    { id: 8, name: "iphone", genre: "Strategy" },
    { id: 9, name: "iphone", genre: "Strategy" },
    { id: 10, name: "iphone", genre: "Strategy" },
    { id: 11, name: "iphone", genre: "Strategy" },
    { id: 12, name: "iphone", genre: "Strategy" },
    { id: 13, name: "iphone", genre: "Strategy" },
    { id: 14, name: "iphone", genre: "Strategy" },
    { id: 15, name: "iphone", genre: "Strategy" },
    { id: 16, name: "iphone", genre: "Strategy" },
    { id: 17, name: "iphone", genre: "Strategy" },
    { id: 18, name: "iphone", genre: "Strategy" },
    { id: 19, name: "iphone", genre: "Strategy" },
    { id: 20, name: "iphone", genre: "Strategy" },
    { id: 21, name: "iphone", genre: "Strategy" },
    { id: 22, name: "iphone", genre: "Strategy" },
    { id: 23, name: "iphone", genre: "Strategy" },
    { id: 24, name: "iphone", genre: "Strategy" },
    { id: 25, name: "iphone", genre: "Strategy" },
    { id: 26, name: "iphone", genre: "Strategy" },
  ]
  constructor() { }

  ngOnInit(): void {
    this.totalBtn = this.data.length / this.limit;
    for (let index = 1; index <= Math.ceil(this.totalBtn); index++) {
      this.btnArr.push(index);
      console.log(this.btnArr);
      this.newdata = this.data.filter(i => this.data.indexOf(i) <= this.limit - 1);

    }
  }

  getData(data: any) {
    this.firstIndex = (data.target.value - 1) * this.limit;
    this.lastIndex = this.firstIndex + this.limit - 1;
    console.log(this.firstIndex, this.lastIndex);
    this.newdata = this.data.filter(i => this.data.indexOf(i) >= this.firstIndex && this.data.indexOf(i) <= this.lastIndex);
  }
}
