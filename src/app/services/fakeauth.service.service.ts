import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FakeauthServiceService {




  private _users:User[]=[
    {id:1,firstname:'Khun',login:'khun',password:'khun'},
    {id:2,firstname:'aude',login:'aude',password:'aude'},
  ];
private _connectedUser : undefined | User;
  constructor() { }

login(login:string,password:string):undefined | User 
    {
    //trouver dans la facedb , l utilisateur qui a le login entre en param
    let founduser=this._users.find(u=>u.login==login);
    if(founduser)
        {
          if(founduser.password==password)
            {
            this._connectedUser=founduser;
            }
        }
    return this._connectedUser;//si aps trouver en fake db 
    }

logout():undefined{
  this._connectedUser=undefined;
  return this._connectedUser;
}

}
