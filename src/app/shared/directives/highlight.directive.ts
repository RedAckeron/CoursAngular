import { Directive, HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private _element:ElementRef) {}

  @HostListener('mouseenter')onMouseEnter(){
this._element.nativeElement.style='background-color : lightpink';
  }
@HostListener('mouseleave')onMouseLeave(){
this._element.nativeElement.style='background-color:transparent';
}
}
