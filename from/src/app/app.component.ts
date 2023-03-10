import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'from';
  //p2c
  // data = {
  //   name: 'yashvi',
  //   age: 30,
  //   email: 'patelyashvi@gmail.com'

  //c2p
  name = "";
  age = ""
  parentFunction(data: any) {
    console.warn(data)
    this.name = data.name;
    this.age = data.age;
  }
};



