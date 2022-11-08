import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

fname:string ="Robert";
lname:string ="Redford";
message : string ="En attente d une reaction de mon enfant ";
  constructor() { }

  ngOnInit(): void {
  }
  repondreBesoinEnfant(besoin:string)
  {
    switch(besoin){
      case'bonjour' :this.message="Salut toi !!!";break;
      case 'manger':this.message="Je veut bouffer !!!";break;
      case 'jouer':this.message="Je veut jouer !!!";break;
      default:this.message="Gniiiiiiii  !!!";break;
    }
  }
}
