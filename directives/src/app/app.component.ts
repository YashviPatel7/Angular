import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home';
  tdtext = "tdtext";
  searchValue: string = "";

  public emp = [{ id: 1, name: "annu", deptment: ".net", salary: "7000", isdeptment: true },
  { id: 2, name: "shiv", deptment: "java", salary: "7000", isdeptment: true },
  { id: 3, name: "raman", deptment: "frontend", salary: "7000", isdeptment: true },
  { id: 4, name: "nick", deptment: "qa", salary: "7000", isdeptment: false },
  { id: 5, name: "jay", deptment: ".net", salary: "7000", isdeptment: true }]

  public days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  public day = "";

  public products = [{ name: "APPLE iPhone 12", available: "Not Available", price: "$300", color: "black" },
  { name: "Minimalists Analog Watch", available: "Available", price: "$109", color: "black" },
  { name: "APPLE iPhone 12", available: "Not Available", price: "$200", color: "black" },
  { name: "Minimalists Analog Watch", available: "Available", price: "$109", color: "black" }]

}
