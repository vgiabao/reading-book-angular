import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../Book";
import {BookListingService} from "../../book-listing.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import {FormControl} from "@angular/forms";

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

  displayedColumns = [ 'title', 'roles', 'author', 'cover']
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
  title = new FormControl();
  author = new FormControl();
  id  = 0;
  cover = new FormControl();
  content = new FormControl();
  roles = new FormControl();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private bookListingService: BookListingService) {
    this.data=data.value;
  }


  ngOnInit() {
    // will log the entire data object
    this.title.setValue(this.data.title)
    this.author.setValue(this.data.author)
    this.id = this.data.id
    this.cover.setValue(this.data.cover)
    this.content.setValue(this.data.content)
    this.roles.setValue(this.data.roles)

  }
  async onUpdateClick(){
    const book: Book =  {
      title: this.title.value,
      author: this.author.value,
      id: this.id,
      cover: this.cover.value,
      content: this.content.value,
      roles: this.roles.value
    }
    console.log("update click")
    await this.bookListingService.updateBook(book)
    window.location.reload()
  }
}
