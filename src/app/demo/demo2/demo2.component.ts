import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {
machaine : string="je suis une gentil chaine";
monNombre : number = 15.456789;
maDate : Date = new Date();
maTemperature : number=10;


  constructor() { }

  ngOnInit(): void {
  }
}