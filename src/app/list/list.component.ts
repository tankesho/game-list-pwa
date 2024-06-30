import { Component, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { Constants } from './../util/constants';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { User } from '../model/user';
import { Entry } from '../model/entry';
import { Game } from '../model/game';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = 'Placeholder';
  img = 'placeholder.jpg';
  score = 8;
  user!: User;
  entries!: Entry[];
  games!: Game[];

  gameCount = [0, 0, 0, 0, 0, 0];
  totalHours = 0;
  averageScore = 0;

  constructor(
    private userService: UserService
  ) {}

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  ngOnInit(): void {
    this.user = WebStorageUtil.get(Constants.LOGGED_USER);
    this.games = WebStorageUtil.get(Constants.GAMES_KEY);
    this.userService
      .getEntriesByUser(this.user.id)
      .then((e: Entry[]) => {
        this.entries = e;
        for (let e of this.entries) {
          if (e.category == 1)
            this.gameCount[0] += 1;

          if (e.category == 2)
            this.gameCount[1] += 1;

          if (e.category == 3)
            this.gameCount[2] += 1;

          if (e.category == 4)
            this.gameCount[3] += 1;

          if (e.category == 5)
            this.gameCount[4] += 1;

          this.gameCount[5] += 1;
          this.averageScore += Number(e.score);
          this.totalHours += e.hoursPlayed;
        }
        this.averageScore = this.averageScore / this.gameCount[5];

        if (isNaN(this.averageScore))
          this.averageScore = 0;
      })
      .catch((e) => {
        this.entries = [];
        alert("Desculpe, não foi possível resgatar sua lista!")
      })
  }
}
