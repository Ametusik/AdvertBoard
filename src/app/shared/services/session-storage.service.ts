import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private isLoggedSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLogged$ = this.isLoggedSubject.asObservable();

  constructor() { }

  saveToken(token: string) {
    sessionStorage.setItem('JWT', 'Bearer '.concat(token));
    this.isLoggedSubject.next(true);
  }

  deleteToken() {
    sessionStorage.removeItem('JWT');
    this.isLoggedSubject.next(false);
  }

  getToken() {
    return sessionStorage.getItem('JWT');
  }

  private hasToken(): boolean {
    return !!this.getToken();
  }
}
