import { Constants } from 'src/app/util/constants';
import { Entry } from '../model/entry';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ListService {
  URL = 'http://localhost:3000//entries';
  URL_PT = 'http://localhost:3000/entradas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  save(entry: Entry): Promise<Entry> {
    const p = new Promise<Entry>((resolve, reject) => {
      if (!entry.category) {
        reject('Por favor insira um valor válido no campo');
      }
      if (!entry.score) {
        reject('Por favor insira um valor de 0 a 10 no campo');
      }
      if (entry.hoursPlayed <= 0) {
        reject(
          'Por favor insira um valor maior que 0 no campo');
      }
      setTimeout(() => {
        this.httpClient.post<Entry>(this.URL, JSON.stringify(entry), this.httpOptions)
        resolve(entry);
      }, 3000);
    });
    return p;
  }
}
