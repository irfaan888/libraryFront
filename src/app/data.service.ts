import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private helper:HttpClient) { }


  Update(userObj)
  {
    return this.helper.put("http://localhost:9898/emps/" + userObj.No,userObj);
  }

  Insert(empobj)
  {
    return this.helper.post("http://localhost:9898/emps",empobj);
  }

}
