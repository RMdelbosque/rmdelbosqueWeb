import { Component, inject } from '@angular/core';
import { PortfolioComponent } from "../../components/portfolio/portfolio.component";
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'porfolio-page',
  imports: [PortfolioComponent],
  templateUrl: './porfolio-page.component.html',
})
export default class PorfolioPageComponent {
  gitHubService = inject(GithubService);
}
