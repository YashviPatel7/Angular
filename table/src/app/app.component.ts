import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table';

  abc = "width:100%";
  theading = "theading";

  userName: string = "";
  userData: string = "";
  userAge: any = "";
  userEmail: string = "";

  studentName() {
    console.log(this.userName);

  }
  userDetail() {
    console.log(this.userData);
    console.log(this.userName);
    console.log(this.userAge);
    console.log(this.userEmail);

  }
}
