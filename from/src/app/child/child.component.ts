import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input() hero: any;p2c
  @Output() parentFunction: EventEmitter<any> = new EventEmitter()
  ngOnInit(): void {
    // console.warn(this.hero)    p2c

  }
  sentData() {
    let data = { name: "yashvi", age: 30 };
    this.parentFunction.emit(data)
  }
}
