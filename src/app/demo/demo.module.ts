import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './demo2/demo2.component';
import { SharedModule } from '../shared/shared.module';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo4childComponent } from './demo4/demo4child/demo4child.component';
import { Demo5Component } from './demo5/demo5.component';

@NgModule({
  declarations: [
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo4childComponent,
    Demo5Component
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports:[]
})
export class DemoModule { }
