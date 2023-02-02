import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { AcmeService } from '../services/acme.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// to make responsive login form
export class LoginComponent {
  // dependency injection
  constructor(private service:AcmeService, private router:Router){
  }

  loginForm = new FormGroup({
    "username": new FormControl("", [Validators.required]),
    "password": new FormControl("", [Validators.required])
  })
  // getter methods
  get username(){
    return this.loginForm.get("username")
  }

  get password(){
    return this.loginForm.get("password")
  }

  authenticate(){
    let data = this.loginForm.value
    this.service.getToken(data).then(res=>res.json()).then(data=>{
      let token=data.token
      localStorage.setItem("token", "Token "+token)
      this.router.navigateByUrl("index")

    }
    )
  }
}
