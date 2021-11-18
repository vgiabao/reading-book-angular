import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required])
  reInputPassword =  new FormControl('', [Validators.required])
  err = false;
  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      this.err = true
      return 'You must input a value';
    }
    if (this.email.hasError('email')) {
      this.err = true
      return 'You must enter a valid email';
    }
    if(this.password.value !== this.reInputPassword.value){
      this.err = true;
      return "Your password does not match"
    }
    console.log(this.err)
    this.err = false
    return
  }
  onRegister(){
    this.getErrorMessage();
    if (!this.err){
      console.log('registered')
    }
  }
}
