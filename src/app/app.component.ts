import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {User} from "./User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  async ngOnInit() {
    await this.authService.fetchCurrentUser()
  }


}
