import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'change-detection';
  public details: any;
  public name: any;

  constructor() {
    this.name = "Yashvi";
    this.details = {
      name: 'Pari',
      email: 'pari@gmail.com'
    }
  }
  changeName() {
    this.name = "Jiyan";
  }
  changeObject() {
    this.details = {
      name: 'maya',
      email: 'maya@gmail.com'
    }
  }
}
