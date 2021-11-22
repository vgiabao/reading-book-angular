import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../User";
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user ?: User

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.user = user;
      console.log(user)
    })
    console.log(this.user)
  }

  profileClick(){
    this.router.navigateByUrl("/profile")
  }
  logoutClick(){
    this.authService.logout()
    localStorage.removeItem('access_tokens')
    this.router.navigateByUrl("")

  }
  libraryClick(){
    this.router.navigateByUrl('')
  }
}
