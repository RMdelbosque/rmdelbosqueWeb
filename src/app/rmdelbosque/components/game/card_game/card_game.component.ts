import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-card-game',
  imports: [RouterLinkActive],
  templateUrl: './card_game.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardGameComponent { }
