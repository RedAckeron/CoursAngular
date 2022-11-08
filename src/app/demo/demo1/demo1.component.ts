import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {
  firstName : string ="Aude";
  hello:string="";
  monId:string="maSuperDiv";
  monPlaceHolder:string ="monPlaceHolder";
  unClickable:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

sayHello(lang:string) : void{
  switch(lang){
    case"fr":this.hello="Bonjour !!!";break;
    case"en":this.hello="Hello !!!";break;
    case"it":this.hello="Ciao !!!";break;
    case"ma":this.hello="Salam !!!";break;
    default:this.hello="Je pas comprendre les mots qui sortent de ta bouche";break;
    }
  }
}
