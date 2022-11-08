import { Component, OnInit } from '@angular/core';
import { Iformateur } from 'src/app/models/formateur';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {
  favoriteFood: string="";
  rage:string="green";
  isBig:boolean=false;
  isBold:boolean=false;
  isItalic:boolean=false;
  isMale:boolean=true;
  weekday:string="";
  //pour le ngfor
  //simple
  listeCourse:string[]=["poulet","patates","Bananes","Champignons","Couscous","Soupiquet"];
//avec objet
formateurs:Iformateur[]=[
  {id:1,lastname:"Chaineux",firstname:"Gavin",gender:"m",birthdate:new Date(1993,9,1998),avatar:"../../assets/image/gavin.gif"},
  {id:2,lastname:"Ly",firstname:"Khun",gender:"m",birthdate:new Date(1993,9,1998),avatar:"../../assets/image/khun.gif"},
  {id:3,lastname:"Beurive",firstname:"Aude",gender:"f",birthdate:new Date(1993,9,1998),avatar:"../../assets/image/aude.gif"}
]

  constructor() { }

  ngOnInit(): void {
  }

  switchGros():void
  {
    this.isBig=!this.isBig;//on inverse le boolean
  }
  switchGras():void
  {
    this.isBold=!this.isBold;//on inverse le boolean
  }switchItalic():void
  {
    this.isItalic=!this.isItalic;//on inverse le boolean
  }
switchGender(gender:string)
    {
    if(gender=="Male")this.isMale=true
    else this.isMale=false;
    }

}
