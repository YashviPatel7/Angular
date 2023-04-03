import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservableListService {

  constructor() { }

  printData(id: any, data: any) {
    let listData = document.createElement("li");
    listData.appendChild(document.createTextNode(data))
    document.getElementById(id)?.appendChild(listData)
  }

}
