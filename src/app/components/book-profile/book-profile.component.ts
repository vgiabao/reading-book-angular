import { Component, OnInit } from '@angular/core';
import {Book} from "../../Book";
import {BookListingService} from "../../book-listing.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

export interface BookFormat {
  id: number;
  author: string;
  title: number;
  roles: number;
  content: string;
  cover: string;
}

@Component({
  selector: 'app-book-profile',
  templateUrl: './book-profile.component.html',
  styleUrls: ['./book-profile.component.css']
})
export class BookProfileComponent implements OnInit {
  public books ?: Book[];

  displayedColumns = ['id', 'title', 'roles', 'author', 'cover']
  constructor(private bookListingService: BookListingService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBooks()

  }
  getBooks() {
      this.bookListingService.getBooks().subscribe(books => {
        this.books = books;
        console.log(books)
      })
  }
  onRowClick(row:any ){
    const dialogRef = this.dialog.open(UpdateBookDialog,{
      data: {
        value: row
      }
    });}

}
@Component({
  selector: 'update-book-dialog',
  templateUrl: 'update-book-dialog.html',
})
export class UpdateBookDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.data=data.value;
  }


  ngOnInit() {
    console.log(this.data)
    // will log the entire data object
  }
}
