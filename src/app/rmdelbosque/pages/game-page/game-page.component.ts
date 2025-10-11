import { Component } from '@angular/core';
import { GameComponent } from "../../components/game/game.component";

@Component({
  selector: 'app-game-page',
  imports: [GameComponent],
  templateUrl: './game-page.component.html'
})
export default class GamePageComponent { }
