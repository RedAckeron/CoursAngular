import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component implements OnInit {

  myinterval:any=false;
  maVariable:number=0;
  pause:any=false;
  constructor() { }

  ngOnInit(): void {
  }
   
  start_chrono(){
    this.myinterval=setInterval(()=>{this.add_chrono();},1000);
    this.pause=true;
    }
    
  add_chrono(){
    this.maVariable++;
  }
  
  stop_chrono(){
    this.pause=false;
  //code de la methode augmenter
  clearInterval(this.myinterval);
  this.myinterval= null;
  }
  reset_chrono(){
    this.maVariable=0;
    this.stop_chrono();
  }
}