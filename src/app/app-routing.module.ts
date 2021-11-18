import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: UserProfileComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
