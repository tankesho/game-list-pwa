import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.css']
})
export class GameContainerComponent {
  @Input() title: string = '';
  @Input() img: string = '';
  @Input() score: number = 0;
}
