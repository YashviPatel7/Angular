import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
      personalDetails: new FormGroup({
        firstname: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
        lastname: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
        email: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z0-9_.]{3,}@[A-Za-z]{3,}[.][A-Za-z.]{2,6}$/)]),
        password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]),
      }),
      country: new FormControl('india'),
      gender: new FormControl('male'),
      hobbies: new FormControl(null),
      skills: new FormArray([
        new FormControl(null, Validators.required),

      ])

    })
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }
  addSkills(): void {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }
  get skillscontrols() {
    return (<FormArray>this.reactiveForm.get('skills')).controls;
  }

  noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true }
    }
    return null;
  }
  // id: number;

  // public removeSkills(id: number) {

  //   if (this.addSkills.length > 1) {
  //     (<FormArray>this.reactiveForm.get('skills')).removeAt(id);
  //   } else {
  //     (<FormArray>this.reactiveForm.get('skills')).reset();
  //   }

  // }
  public disableAdd() {
    if (this.skillscontrols.length > 2) {
      return true;
    }
    return false;
  }

}
