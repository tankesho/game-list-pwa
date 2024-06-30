import { Constants } from 'src/app/util/constants';
import { Entry } from '../model/entry';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { WebStorageUtil } from '../util/web-storage-util';

@Injectable({
  providedIn: 'root',
})

export class EntryService {
  URL = 'http://localhost:3000/entries';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private httpClient: HttpClient) {}

  save(entry: Entry): Promise<Entry> {
    const p = new Promise<Entry>((resolve, reject) => {
      if (!entry.category) {
        reject('Por favor insira um valor válido no campo');
      }
      if (entry.score < 0 && entry.score > 10) {
        reject('Por favor insira um valor de 0 a 10 no campo');
      }
      if (entry.hoursPlayed < 0) {
        reject(
          'Por favor insira um valor maior ou igual a 0 no campo');
      }
      console.log(entry);

      setTimeout(() => {
        lastValueFrom(this.httpClient.post<Entry>(this.URL, JSON.stringify(entry), this.httpOptions));
        resolve(entry);
      }, 3000);
    });
    return p;
  }

  update(entry: Entry) {
    const p = new Promise<Entry>((resolve, reject) => {
      if (!entry.category) {
        reject('Por favor insira um valor válido no campo');
      }
      if (entry.score < 0 && entry.score > 10) {
        reject('Por favor insira um valor de 0 a 10 no campo');
      }
      if (entry.hoursPlayed < 0) {
        reject(
          'Por favor insira um valor maior ou igual a 0 no campo');
      }
      setTimeout(() => {
        lastValueFrom(this.httpClient.put<Entry>(this.URL + "/" + entry.id, entry, this.httpOptions));
        resolve(entry);
      }, 3000);
    });
    return p;
  }

  delete(entry: Entry) {
    const p = new Promise<Entry>((resolve) => {
    setTimeout(() => {
      lastValueFrom(this.httpClient.delete<Entry>(this.URL + "/" + entry.id, this.httpOptions));
      resolve(entry);
    }, 3000);
    });

    return p;
  }

  isExist = async (userId: number, gameId: number): Promise<boolean> => {
    const e = await lastValueFrom(this.httpClient.get<Entry[]>(this.URL + '?userId_like=' + userId + '&gameId_like=' + gameId));
    if (e.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  getEntryByUserAndGame(userId: number, gameId: number): Promise<Entry[]> {
    return lastValueFrom(this.httpClient.get<Entry[]>(this.URL + '?userId_like=' + userId + '&gameId_like=' + gameId))
  }

  getLastEntryId = async (): Promise<number> => {
    const entries = await lastValueFrom(this.httpClient.get<Entry[]>(this.URL));

    if (entries.length === 0) {
      return 1;
    }

    const lastEntry = entries[entries.length - 1];
    return lastEntry.id;
  }
}
