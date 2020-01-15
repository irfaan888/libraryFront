import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userdetails = {
    uname:"",
    password:""
  };
  
  obj:any;

  constructor(private router:Router,private service:AuthService) { }

  ngOnInit() {

  }

  message;
Sign()
{
  this.router.navigate(['user']);
}


  SignIn()
  {
    let observableResult=this.service.Login(this.userdetails);
    observableResult.subscribe((result)=>{  

      console.log(result);
      this.obj=result;
    });
    if(this.obj.role=="OWNER")
    {
      this.router.navigate(['owner']);
    }
    else if(this.obj.role=="librarian")
    {
      this.router.navigate(['LIBRARIAN']);
    }
    else if(this.obj.role=="MEMBER")
    {
      this.router.navigate(['user']);
    }
    else{
      this.message="uname/ pwd is incorrect";
    }
  }

  
}
