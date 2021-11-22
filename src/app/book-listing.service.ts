import { Injectable, Output, EventEmitter } from '@angular/core';
import {Book} from "./Book";
import {Observable, of} from "rxjs";
import {constant} from "../assets/constant";
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookListingService {
  public books ?:Book[];

  constructor(private http: HttpClient) {}
  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(constant.getAllBookUrl)
      .pipe(
        tap(_ => this.log('fetch book')),
        catchError(this.handleError<Book[]>('getBook', [],))
      )
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }
  async updateBook(book: Book){
    console.log('book from service' , book)
    const token = localStorage.getItem("access_tokens")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    await this.http.put(constant.updateBook, book, {headers}).subscribe(res => console.log(res));
  }
}
