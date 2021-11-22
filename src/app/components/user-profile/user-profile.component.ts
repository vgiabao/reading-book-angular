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
  user?:any
  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user: any) => this.user = user)
    console.log('user from profile', this.user)
  }

}
