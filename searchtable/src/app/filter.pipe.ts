import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterText: any): any {
    if (filterText == "") {
      return value;
    }
    let newData = value.filter((item: {
      name: any; course: any; DOB: any; gender: any;
    }) => item.name.toLowerCase().includes(filterText.toLowerCase()) || item.course.toLowerCase().includes(filterText.toLowerCase()) || item.DOB.toString().includes(filterText.toLowerCase()) || item.gender.toLowerCase().includes(filterText.toLowerCase()));
    return newData
    // { name: "ravi", course: "MBA", DOB: new Date(), gender: 'Male' },]
  }

}
