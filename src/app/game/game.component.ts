import { Component, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';
import { EntryService } from '../services/entry.service';
import { ActivatedRoute } from '@angular/router';
import { WebStorageUtil } from '../util/web-storage-util';
import { Constants } from '../util/constants';
import { Entry } from '../model/entry';
import { Game } from '../model/game';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: [ './game.component.css' ],
  providers: [ EntryService ]
})
export class GameComponent implements AfterViewInit {
  URL_PT = 'http://localhost:3000/registros/';
  entry!: Entry;
  game!: Game;
  gameId!: number;

  constructor(
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.gameId = +this.route.snapshot.paramMap.get('id')!;
    this.game = WebStorageUtil.get(Constants.GAMES_KEY)[this.gameId];
  }

  ngAfterViewInit() : void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      M.FormSelect.init(elems);
    });
  }
}
