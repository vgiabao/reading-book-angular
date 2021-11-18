import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() user ?: User
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  profileClick(){
    this.router.navigateByUrl("/profile", { state: { user: this.user } })
  }
  logoutClick(){
    this.router.navigateByUrl("")
  }
  libraryClick(){
    this.router.navigateByUrl('')
  }
}
