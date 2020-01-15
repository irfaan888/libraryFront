import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private helper:HttpClient) { }

result:any;


  Login(userdetails)
  {
    return this.helper.get("http://localhost:7070/library/user/Login/" + userdetails.uname+"/"+userdetails.password);
      
  }


}
