import { Component } from '@angular/core';
import { GameInterface } from 'src/app/interfaces/game.interface';
import { GamesMock } from 'src/app/mocks/games.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public games: GameInterface[] = GamesMock;
}
