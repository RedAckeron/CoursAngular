import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menu:Link[]=[];
  constructor() { }

    ngOnInit(): void {
    this.menu=[
      {title:"Accueil",url:"/home"},
      {
      title:"Demo",url:"/demo/demo1",isVisible:false,children:[
      {title:"Binding",url:"/demo/demo1"},
      {title:"Pipes",url:"/demo/demo2"},
      {title:"Directives",url:"/demo/demo3"},
      {title:"Inputs",url:"/demo/demo4"}]},
      {
      title:"Exercice",url:"/exercice/exo1",isVisible:false,children:[
      {title:"Chronometre",url:"/exercice/exo1"},
      {title:"ShopingList",url:"/exercice/exo2"},
      ]}
    ]
  }

 toggleMenu(index : number)
 {
  let currentState = this.menu[index].isVisible;
  this.menu.forEach(menu=>menu.isVisible=false);
  this.menu[index].isVisible=!currentState;
 }
}
