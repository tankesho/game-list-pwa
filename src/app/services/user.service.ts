import { Injectable } from "@angular/core";
import { User } from '../model/user';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { Constants } from "../util/constants";
import { Entry } from "../model/entry";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, lastValueFrom, interval, take } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  users!: User[];
  constructor(private httpClient: HttpClient) {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
  }

  URL = 'http://localhost:3000/entries';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  save(user: User) {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
    this.users.push(user);
    WebStorageUtil.set(Constants.USERS_KEY, this.users);
  }

  update(user: User) {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
    this.delete(user.username);
    this.save(user);
  }

  delete(username: string): boolean {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
    this.users = this.users.filter((u) => {
      return u.username?.valueOf() != username?.valueOf();
    });

    WebStorageUtil.set(Constants.USERS_KEY, this.users);
    return true;
  }

  isExist(value: string): boolean {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
    for (let u of this.users) {
      if (u.username?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
   }

  getUsers(): User[] {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
    return this.users;
  }

  getEntriesByUser(id: number): Promise<Entry[]> {
    return lastValueFrom(this.httpClient.get<Entry[]>(this.URL + '?userId_like=' + id))
  }

  getLastUserId() {
    this.users = WebStorageUtil.get(Constants.USERS_KEY);

    if (this.users.length > 0) {
      return this.users[this.users.length - 1].id;
    } else {
      return 0;
    }
  }
}
