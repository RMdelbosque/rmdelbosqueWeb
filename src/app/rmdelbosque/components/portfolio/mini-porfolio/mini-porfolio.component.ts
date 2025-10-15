import { Component, computed } from '@angular/core';
import { GithubService } from 'src/app/rmdelbosque/services/github.service';
import { GithubRepoListComponent } from "../github-repo-list/github-repo-list.component";
import { ButtonComponent } from '../../Button/Button.component';

@Component({
  selector: 'app-mini-porfolio',
  imports: [GithubRepoListComponent, ButtonComponent],
  templateUrl: './mini-porfolio.component.html'
})
export class MiniPorfolioComponent {
  private githubService = new GithubService();
  gihubRepos = this.githubService.gihubRepos;
  gihubReposLoading = this.githubService.gihubReposLoading;

  featuredProjects = computed(() =>
    this.gihubRepos()
      .filter((r) => !r.fork)
      .slice(0, 3)
  );
}
