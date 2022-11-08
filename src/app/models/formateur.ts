export class Formateur
{
    id:number;
    lastname:string;
    firstname:string;
    gender : string;
    birthdate:Date;
    avatar:string;
    
    constructor(id:number,lastname:string,firstname:string,gender : string,birthdate:Date,avatar:string)
    {
        this.id=id;
        this.lastname=lastname;
        this.firstname=firstname;
        this.gender=gender;
        this.birthdate=birthdate;
        this.avatar=avatar;
    }
}
export interface Iformateur
{
    id:number;
    lastname:string;
    firstname:string;
    gender : string;
    birthdate:Date;
    avatar:string;
}