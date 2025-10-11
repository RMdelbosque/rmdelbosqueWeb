import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-game-over',
  imports: [],
  templateUrl: './game-over.component.html'
})
export class GameOverComponent {
  public gameWon = input.required<boolean>();
  public score = input.required<number>();

  public restart = output<void>();
  public continue = output<void>();
}
