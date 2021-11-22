import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";
import {User} from "../../User";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  user ?: User
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => this.user = user)
  }

}
