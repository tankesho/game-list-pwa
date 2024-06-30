import { Game } from './game';

export class Entry {
  id: number;
  category: number;
  hoursPlayed: number;
  score: number;
  gameId: number;
  userId: number;
  constructor(id: number, category: number, hoursPlayed: number, score: number, gameId: number, userId: number) {
    this.id = id;
    this.category = category;
    this.hoursPlayed = hoursPlayed;
    this.score = score;
    this.gameId = gameId;
    this.userId = userId;
  }

  public static clone(entry: Entry) {
    let e: Entry = new Entry(entry.id, entry.category, entry.hoursPlayed, entry.score, entry.gameId, entry.userId);
    return e;
  }

  public static toWS(entry: Entry) {
    let e: Entry = new Entry(entry.id, entry.category, entry.hoursPlayed, entry.score, entry.gameId, entry.userId);
    return e;
  }
}
