import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../User";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user?:User
  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    if (!history.state.email) this.getCurrentUser();
    else this.user = history.state

  }
  getCurrentUser(){
    const token = localStorage.getItem('access_tokens')
    if (token) this.authService.fetchCurrentUser(token).subscribe(user => {
      this.user = user;
      console.log(this.user)
    })
    console.log("token")

  }
}
