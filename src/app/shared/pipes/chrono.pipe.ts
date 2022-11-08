import { Pipe, PipeTransform } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';

@Pipe({
  name: 'chrono'
})
export class ChronoPipe implements PipeTransform {
  
  transform(value: number): string {
    return Math.floor(value/60)+":"+((value%60));
  }
}
