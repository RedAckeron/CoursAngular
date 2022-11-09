export class User {
    public id : number;
    public firstname:string;
    public login : string;
    public password:string;
    constructor(id:number,firstname:string,login:string,password:string){
        this.id=id;
        this.firstname=firstname;
        this.login=login;
        this.password=password;
    }
}