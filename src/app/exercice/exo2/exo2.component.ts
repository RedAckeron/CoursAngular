import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/shoppinglist';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {

  listeCourse:Item[]=[];
  nameItem:string="";
  qt:number=0;
  itemtodelete?:number;
  constructor() { }
  ngOnInit(): void {
  }
  
addItem()
{
let item=new Item(this.nameItem,1);

this.listeCourse.push(item);
console.clear();
console.log(this.listeCourse);
}

removeQt(index:number)
  {
  if(this.listeCourse[index].qt==1) this.listeCourse.splice(index);
  else this.listeCourse[index].qt--;
  }

addQt(index:number)
  {
    this.listeCourse[index].qt++; 
  }
}
