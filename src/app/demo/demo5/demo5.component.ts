import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FakeauthServiceService } from 'src/app/services/fakeauth.service.service';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {
connectedUser:undefined | User;
login:string="";
password:string="";
  constructor(private _authService : FakeauthServiceService) { }

  ngOnInit(): void {
  }
connect ():void
{
this.connectedUser=this._authService.login(this.login,this.password);
}
disconnect():void
{
this.login="";
this.password="";
this.connectedUser=this._authService.logout();
}
}
