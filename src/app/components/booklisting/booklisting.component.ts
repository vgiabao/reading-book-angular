import {Component, Input, OnInit} from '@angular/core';
import {BookListingService} from "../../book-listing.service";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Book} from "../../Book";
import {MatDialog} from '@angular/material/dialog';
import {Router} from "@angular/router";
import {User} from "../../User";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-booklisting',
  templateUrl: './booklisting.component.html',
  styleUrls: ['./booklisting.component.css']
})
export class BooklistingComponent implements OnInit {
  user ?: User;
  books: Book[] = []

  constructor(private bookListingService: BookListingService, public dialog: MatDialog, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(data => this.user = data)
    this.getBooks()
  }

  getBooks() {
    setTimeout(() =>
      this.bookListingService.getBooks().subscribe(books => this.books = books), 1000)
  }

  openDialog() {
    if (JSON.stringify(this.user) === JSON.stringify({})) {
      const dialogRef = this.dialog.open(DialogRequestLogin);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
  openPreview(event:any){
    console.log(event)
  }
}

@Component({
  selector: 'dialog-request-login',
  templateUrl: 'dialog-request-login.html',
})
export class DialogRequestLogin {
  constructor(private router: Router) {
  }

  onLoginClick() {
    this.router.navigateByUrl('/login')
  }
}


