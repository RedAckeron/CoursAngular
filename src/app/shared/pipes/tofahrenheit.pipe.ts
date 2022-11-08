import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFahrenheit'
})
export class TofahrenheitPipe implements PipeTransform {

  transform(value: number): number {
    
    return value * 9/5+32;
  }

}
