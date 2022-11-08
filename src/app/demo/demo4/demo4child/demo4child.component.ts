import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo4child',
  templateUrl: './demo4child.component.html',
  styleUrls: ['./demo4child.component.scss']
})
export class Demo4childComponent implements OnInit {
@Input() nomParent : string ="Inconnus";
@Output() faireQuelqueChose:EventEmitter<string>
fname:string = "Kevin";
  constructor() {
    this.faireQuelqueChose=new EventEmitter<string>();
   }

  ngOnInit(): void {
  }
  besoinEnfant(besoin:string):void{
    this.faireQuelqueChose.emit(besoin);
  }
}
