import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pagination';
  collection = [];

  constructor() {
    // for (let i = 1; i <= 100; i++) {
    //   let obj = { 'Name': `User Name${i}`, 'id': `UID${i}` }
    //   this.collection.push(obj);
    // }
  }

  ngOnInit() { }
}
