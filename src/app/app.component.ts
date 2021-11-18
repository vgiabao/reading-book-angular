import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {User} from "./User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public user  ?:User
  constructor(private authService: AuthService) {
  }
  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser(){
    const token = localStorage.getItem('access_tokens')
    if (token) this.authService.fetchCurrentUser(token).subscribe(user => {
      this.user = user;
    })
  }




}
