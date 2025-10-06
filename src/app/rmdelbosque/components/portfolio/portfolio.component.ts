import { Component, OnInit, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubRepo } from '../../interfaces/github_repo.interface';
import { GithubRepoListComponent } from "./github-repo-list/github-repo-list.component";

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, GithubRepoListComponent],
  templateUrl: './portfolio.component.html',
})

export class PortfolioComponent {
  gitHubRepos = input.required<GithubRepo[]>();
  gihubReposLoading = input.required<boolean>();
}
