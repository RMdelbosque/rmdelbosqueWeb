import { Component } from '@angular/core';
import { MiniPorfolioComponent } from "../../components/portfolio/mini-porfolio/mini-porfolio.component";
import { SummaryComponent } from "../../components/abaout-me/summary/summary.component";
import { GreetingsComponent } from '../../components/abaout-me/greetings/greetings.component';
import { CardGameComponent } from "../../components/game/card_game/card_game.component";

@Component({
  selector: 'home-page',
  imports: [MiniPorfolioComponent, GreetingsComponent, SummaryComponent, CardGameComponent],
  templateUrl: './home-page.component.html'
})

export default class HomePageComponent {

}
