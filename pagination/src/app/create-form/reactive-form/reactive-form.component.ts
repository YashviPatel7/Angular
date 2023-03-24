import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm: FormGroup;
  // public loginForm!: FormGroup;
  ngOnInit(): void {

    // this.loginForm = new FormGroup({
    //   useremail: new FormControl(''),
    //   password: new FormControl('')
    // })
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      email: new FormControl(null),
      country: new FormControl('india'),
      gender: new FormControl('male'),
      hobbies: new FormControl(null),
      password: new FormControl(null)
    })
  }

  onSubmit() {
    console.warn(this.reactiveForm);
  }

}
