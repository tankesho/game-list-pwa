import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../util/constants';
import { WebStorageUtil } from '../util/web-storage-util';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginSource = new Subject<boolean>();

  constructor(private router: Router) {}

  login(user: User) {
    WebStorageUtil.set(Constants.LOGGED_IN_KEY, true);
    WebStorageUtil.set(Constants.LOGGED_USER, user);
    this.loginSource.next(true);
    this.router.navigate(['users', user.id]);
  }

  logout() {
    WebStorageUtil.set(Constants.LOGGED_IN_KEY, false);
    WebStorageUtil.set(Constants.LOGGED_USER, '');
    this.loginSource.next(false);
    this.router.navigate(['']);
  }

  asObservable(): Observable<boolean> {
    return this.loginSource;
  }
}
