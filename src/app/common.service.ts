import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

  createUser(user: any){
    let tmpusers = localStorage.getItem("userList");
    let oldusers : any;

    if(tmpusers != null)
      oldusers = JSON.parse(tmpusers);
    if(!oldusers){
      oldusers = [];
    }
    oldusers.usersData.push({
      "role" : user.role,
      "lastName" : user.lastName,
      "firstName": user.firstName,
      "roleText" : user.roleText,
    });

    localStorage.setItem("userList", JSON.stringify(oldusers))
    // return this._http.get("../assets/user.json", user)
  }
  deleteUser(){}

  readUserJson(){
    return this._http.get("../assets/user.json")
  }
}
