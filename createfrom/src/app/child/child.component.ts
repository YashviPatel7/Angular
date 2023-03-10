import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  constructor() { }

  //@Input()
  //name!:string;
  private _name!: string

  private _dob!: string

  age!: number;

  uname!: string;

  message!: string;

  @Input()
  public get name(): string {
    return this._name
  }
  public set name(value: string) {
    this._name = value;
    this.uname = this._name.charAt(0).toUpperCase() + this._name.substring(1);
  }

  @Input()
  public get dob(): string {
    return this._dob
  }
  public set dob(dobValue: string) {
    this._dob = dobValue;
    this.age = this.getAge(this.dob);
    if (this.age > 0 && this.age < 12) {
      this.message = "you are kid"
    }
    else if (this.age >= 12 && this.age < 18) {
      this.message = "you are teenger"
    }
    else if (this.age >= 18 && this.age < 50) {
      this.message = "you are mature"
    }
    else {
      this.message = "you are old"
    }
  }

  private getAge(dateOfBirth: string) {
    let Dob = new Date(dateOfBirth).getTime();
    let currentdate = new Date().getTime();

    return Math.floor((currentdate - Dob) / (1000 * 60 * 60 * 24 * 365));
  }
}
