import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'searchtable';
  filterText: string = '';


  public students = [{ name: "annu", course: "MBA", DOB: new Date(), gender: 'Female' },
  { name: "ramu", course: "MCA", DOB: new Date(), gender: 'Male' },
  { name: "anushka", course: "MBA", DOB: new Date(), gender: 'Female' },
  { name: "ravi", course: "MCA", DOB: new Date(), gender: 'Male' },
  { name: "annu", course: "MBA", DOB: new Date(), gender: 'Female' },
  { name: "ravi", course: "MCA", DOB: new Date(), gender: 'Male' },]


}
