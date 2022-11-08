import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/shoppinglist';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() listeCourse : Item[]=[];
@Output() effaceritem:EventEmitter<number>
@Output() ajouteritem:EventEmitter<number>

  constructor() { 
    this.effaceritem=new EventEmitter<number>();
    this.ajouteritem=new EventEmitter<number>();

  }
  ngOnInit(): void {
  }
  effacerItem(index:number)
  {
  this.effaceritem.emit(index);
  }
  ajouterItem(index:number)
  {
  this.ajouteritem.emit(index);
  } 
}
