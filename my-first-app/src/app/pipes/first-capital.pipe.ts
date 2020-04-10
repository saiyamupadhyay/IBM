import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCapital'
})
export class FirstCapitalPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    var x =value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(); 
    return x;
  }

}
ng