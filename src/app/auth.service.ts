import {EventEmitter, Injectable, Output} from '@angular/core';
import {constant} from "../assets/constant";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, tap} from "rxjs/operators";
import {User} from "./User";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }
  @Output() login = new EventEmitter()
  signUp(user:User){

  }
  signIn(email: string, password: string) : Observable<any>{
    return this.http.post(constant.loginUrl, {email, password}).pipe(
      catchError(this.handleError<any>('login'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  fetchCurrentUser(token : string) : Observable<any>  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.get(constant.getCurrentUser, { headers: headers })

  }

}
