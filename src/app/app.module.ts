import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BookComponent } from './components/book/book.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {AppRoutingModule} from "./app-routing.module";
import { BooklistingComponent } from './components/booklisting/booklisting.component';
import { HttpClientModule } from '@angular/common/http';

// material components
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from "@angular/material/icon";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogRequestLogin} from "./components/booklisting/booklisting.component";
import {AuthModule} from "./auth/auth.module";
import {MatMenuModule} from "@angular/material/menu";
import { ProfileComponent } from './profile/profile.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookComponent,
    HomepageComponent,
    BooklistingComponent,
    UserProfileComponent,
    DialogRequestLogin,
    ProfileComponent,

  ],
  imports: [
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatIconModule,
    AuthModule,
    MatMenuModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
