import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {

  public incrementNumber: any;
  constructor() {
    this.incrementNumber = 0;
  }

  increment() {
    this.incrementNumber++;
  }
  parentCall() {
    console.log("parent call");

  }
}
