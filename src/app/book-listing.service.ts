import { Injectable } from '@angular/core';
import {Book} from "./Book";
import {Observable, of} from "rxjs";
import {constant} from "../assets/constant";
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookListingService {

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
}
