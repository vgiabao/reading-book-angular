import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required])
  err = false
  token: string = ''
  uEmail : string = ''

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      this.err = true
      return 'You must input a value';
    }
    if (this.email.hasError('email')) {
      this.err = true
      return 'You must enter a value';
    }
    this.err = false
    return
  }
  onRegisterClick(){
    this.router.navigateByUrl('/register')
  }
  async onLogin(){
     this.getErrorMessage()
    if (!this.err){
       await this.authService.signIn(this.email.value, this.password.value).subscribe(info => {
         this.token = info.access_tokens;
         this.uEmail = info.email;

         localStorage.setItem("access_tokens", info.access_tokens);
         localStorage.setItem('email', info.email);
       })

       this.router.navigateByUrl('/');
    }
  }
}
