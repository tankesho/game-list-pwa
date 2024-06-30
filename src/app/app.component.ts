import { Component } from '@angular/core';
import { Shared } from './util/shared';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-list';

  ngOnInit() {
    Shared.initializeWebStorage();
  }
}
