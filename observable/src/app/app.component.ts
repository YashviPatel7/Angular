import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { ObservableListService } from './observable-list.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'observable';
  public item = ['yashvi', 'maya', 'khushi'];
  public items = from(this.item)

  constructor(private _observablelistservice: ObservableListService) { }
  ngOnInit(): void {

    // Map
    this.items.pipe(map((data) => this.getData(data))).subscribe(res => {

      res.subscribe(items => this._observablelistservice.printData('map', items))
    }
    )


    // Map + MergeAll
    this.items.pipe(map((data: any) => (this.getData(data))), mergeAll()).subscribe((res: any) => {
      this._observablelistservice.printData('mergeAll', res);
    })

    // MergeMap

    this.items.pipe(mergeMap((data) => this.getData(data))).subscribe((res: any) => {
      this._observablelistservice.printData('mergeMap', res);
    })

  }
  getData(items: any) {
    return of(items);
  }
}
