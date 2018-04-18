import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personNameUpperCase'
})
export class PersonNameUpperCasePipe implements PipeTransform {

  transform(value: String, args?: any): any {
    return value.toUpperCase();
  }

}
