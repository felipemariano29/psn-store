import { Component, Input } from '@angular/core';
import { GameInterface } from 'src/app/interfaces/game.interface';
import { GamesMock } from 'src/app/mocks/games.mock';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  public game: GameInterface = {
    id: 0,
    imgUrl: '',
    name: '',
    label: '',
    type: '',
    price: '',
  };
}
