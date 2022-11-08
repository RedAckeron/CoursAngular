import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TofahrenheitPipe } from './pipes/tofahrenheit.pipe';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { ChronoPipe } from './pipes/chrono.pipe';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    TofahrenheitPipe,
    ConvertTempPipe,
    ChronoPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TofahrenheitPipe,
    ConvertTempPipe,
    ChronoPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
