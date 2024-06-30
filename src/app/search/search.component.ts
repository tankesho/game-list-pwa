import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../model/game';
import { Constants } from '../util/constants';
import { WebStorageUtil } from '../util/web-storage-util';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  img = 'placeholder.jpg';

  constructor(private route: ActivatedRoute) {}

  games!: Game[];
  queriedGames!: Game[];
  search = '';

  ngOnInit(): void {
    this.games = WebStorageUtil.get(Constants.GAMES_KEY);
    this.queriedGames = this.games;
  }

  ngAfterViewInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
    });
  }

  ngOnSubmit() {
    this.queriedGames = [];
    for (let i = 0; i < this.games.length; i++) {
      if (this.containsIgnoreCase(this.games[i].title, this.search))
        this.queriedGames.push(this.games[i]);
    }
  }

  containsIgnoreCase(str: string, search: string): boolean {
    return str.toLowerCase().includes(search.toLowerCase());
  }
}
