import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-game',
  imports: [RouterLink],
  templateUrl: './card_game.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardGameComponent { }
