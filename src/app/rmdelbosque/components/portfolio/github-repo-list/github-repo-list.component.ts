import { Component, input } from '@angular/core';
import { GithubRepo } from 'src/app/rmdelbosque/interfaces/github_repo.interface';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../Button/Button.component';

@Component({
  selector: 'app-github-repo-list',
  imports: [CommonModule],
  templateUrl: './github-repo-list.component.html'
})
export class GithubRepoListComponent {
  public gitHubRepo = input.required<GithubRepo>();
 }
