import { AfterViewInit, Component } from '@angular/core';
import { MiniPorfolioComponent } from "../../components/portfolio/mini-porfolio/mini-porfolio.component";
import { GreetingsComponent } from "../../components/abaout-me/greetings/greetings.component";
import { SummaryComponent } from "../../components/abaout-me/summary/summary.component";

@Component({
  selector: 'home-page',
  imports: [MiniPorfolioComponent, GreetingsComponent, SummaryComponent],
  templateUrl: './home-page.component.html'
})
export default class HomePageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Esperamos un momento a que el DOM y los estilos estén aplicados
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' }); // 🔥 fuerza reset completo
    }, 200); // puedes ajustar el delay (200–500 ms suele ir bien)
  }


}
