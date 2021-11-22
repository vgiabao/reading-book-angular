import {EventEmitter, Injectable, Output} from '@angular/core';
import {constant} from "../assets/constant";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, tap} from "rxjs/operators";
import {User} from "./User";
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSource = new BehaviorSubject<any>({});
  currentUser = this.userSource.asObservable()
  constructor(private http: HttpClient) {
  }

  async signIn(email: string, password: string) {
    const access_tokens = await this.http.post(constant.loginUrl, {email, password}).pipe(
      catchError(this.handleError<any>('login'))
    ).subscribe(data => {
      localStorage.setItem("access_tokens", data.access_tokens);
      this.userSource.next(data)
    })
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

  async fetchCurrentUser() {
    const token = localStorage.getItem("access_tokens")
    console.log('token ', token)
    console.log("fetching current user")
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
      const user = await this.http.get(constant.getCurrentUser, {headers: headers}).subscribe(data => this.userSource.next(data))
    }
  }

  logout() {
    this.userSource.next({})
  }

}
